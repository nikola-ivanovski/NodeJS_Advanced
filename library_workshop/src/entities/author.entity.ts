import { Author } from 'src/models/author.interface';
import { Book } from 'src/models/book.interface';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { BookEntity } from './book.entity';

@Entity('author')
export class AuthorEntity implements Author {
  @PrimaryColumn()
  id: string;

  @Column()
  firstName: string;
  @Column()
  lastName: string;
  @Column()
  email: string;
  @Column()
  birthDate: Date;
  @OneToMany(() => BookEntity, (bookEntity) => bookEntity.author)
  books: Book[];
}
