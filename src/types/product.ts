export interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail?: string;
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
