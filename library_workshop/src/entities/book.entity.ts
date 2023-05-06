import { Author } from 'src/models/author.interface';
import { Book } from 'src/models/book.interface';
import { Publisher } from 'src/models/publisher.interface';
import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';
import { AuthorEntity } from './author.entity';
import { PublisherEntity } from './publisher.entity';

@Entity('books')
export class BookEntity implements Book {
  @PrimaryColumn()
  id: string;

  @Column()
  title: string;
  @Column()
  description: string;
  @Column()
  genre: string;
  @ManyToOne(() => AuthorEntity)
  author: Author;
  @OneToMany(() => PublisherEntity, (publisherEntity) => publisherEntity.name)
  publisher: Publisher;
}
