import { IsNotEmpty } from 'class-validator';

export class OrderDto {
  @IsNotEmpty()
  products: ProductDto[];
  @IsNotEmpty()
  description: string;
  placedAt: number;
}

export class ProductDto {
  id: string;
  name: string;
  @IsNotEmpty()
  price: number;
}

export class UpdateProductDto {
  id: string;
  name: string;
  price: number;
}
