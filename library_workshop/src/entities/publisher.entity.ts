import { Book } from 'src/models/book.interface';
import { Publisher } from 'src/models/publisher.interface';
import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { BookEntity } from './book.entity';

@Entity('publisher')
export class PublisherEntity implements Publisher {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;
  @Column()
  address: string;
  @Column()
  phoneNumber: string;
  @ManyToOne(() => BookEntity, (bookEntity) => bookEntity.publisher)
  books: Book[];
}
