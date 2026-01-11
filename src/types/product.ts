export interface Review {
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
  images: string[];
  brand?: string;
  stock?: number;
  warrantyInformation?: string;
  shippingInformation: string;
  returnPolicy: string;
}
