import { Order, Product } from 'src/interfaces/interfaces';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('orders')
export class OrderEntity implements Order {
  @PrimaryColumn()
  id: string;

  @Column()
  placedAt: number;

  @Column()
  description: string;

  @Column('int', { array: true })
  products: Product[];
}
