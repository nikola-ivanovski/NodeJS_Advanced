import { Product } from 'src/interfaces/interfaces';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('products')
export class ProductEntity implements Product {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  price: number;
}
