import { Book } from 'src/models/book.interface';

export class AuthorDto {
  firstName: string;
  lastName: string;
  email: string;
  birthDate: Date;
  books: Book[];
}

export class UpdateAuthorDto {
  firstName: string;
  lastName: string;
  email: string;
  birthDate: Date;
  books: Book[];
}
