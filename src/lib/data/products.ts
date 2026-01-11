import { Product } from "@/types/product";
import { ALLOWED_CATEGORIES } from "@/lib/constants/categories";

export async function getAllProducts(): Promise<Product[]> {
  const fetchPromises = ALLOWED_CATEGORIES.map(async (category) => {
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

export async function getProductById(id: number): Promise<Product | null> {
  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) return null;

  const data = await res.json();

  if (!ALLOWED_CATEGORIES.includes(data.category)) {
    return null;
  }

  return data as Product;
}
