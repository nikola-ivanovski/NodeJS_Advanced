import { Author } from 'src/models/author.interface';
import { Publisher } from 'src/models/publisher.interface';

export class BookDto {
  title: string;
  description: string;
  genre: string;
  author: Author;
  publisher: Publisher;
}
