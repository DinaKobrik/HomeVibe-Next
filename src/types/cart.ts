import { Product } from "./product";

export interface CartItem {
  id: number;
  quantity: number;
}

export interface CartProduct extends Product {
  quantity: number;
}
