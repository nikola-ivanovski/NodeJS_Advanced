import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookEntity } from 'src/entities/book.entity';
import { Repository } from 'typeorm';
import { BookDto } from './dto/book.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(BookEntity)
    private readonly bookRepository: Repository<BookEntity>,
  ) {}

  // GET ALL BOOKS
  async getBooks() {
    return this.bookRepository.find();
  }

  async createBook(bookDto: BookDto) {
    const book = {
      ...bookDto,
      id: uuid(),
    };
  }
}
