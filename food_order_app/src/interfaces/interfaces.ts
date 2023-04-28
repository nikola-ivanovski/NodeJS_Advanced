export interface Product {
  id: string;
  name: string;
  price: number;
}

export interface Order {
  id: string;
  placedAt: number;
  description: string;
  products: Product[];
}
