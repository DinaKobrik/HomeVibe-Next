interface Review {
  rating: number;
  reviewerName: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage?: number;
  rating: number;
  reviews: Review[];
  thumbnail: string;
  category: string;
}

const CATEGORIES = [
  "furniture",
  "home-decoration",
  "kitchen-accessories",
  "lighting",
] as const;

export async function getAllProducts(): Promise<Product[]> {
  const fetchPromises = CATEGORIES.map(async (category) => {
    const res = await fetch(
      `https://dummyjson.com/products/category/${category}`,
      {
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) return [];

    interface ApiResponse {
      products: Omit<Product, "category">[];
    }

    const data = (await res.json()) as ApiResponse;
    return data.products.map((p) => ({ ...p, category }));
  });

  const results = await Promise.all(fetchPromises);
  return results.flat();
}
