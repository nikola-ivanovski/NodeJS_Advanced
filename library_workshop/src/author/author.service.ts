import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthorEntity } from 'src/entities/author.entity';
import { Repository } from 'typeorm';
import { AuthorDto, UpdateAuthorDto } from './dto/author.dto';
import { v4 as uuid } from 'uuid';
import { Author } from 'src/models/author.interface';

@Injectable()
export class AuthorService {
  constructor(
    @InjectRepository(AuthorEntity)
    private readonly authorRepository: Repository<AuthorEntity>,
  ) {}

  // GET ALL AUTHORS
  async getAuthors() {
    return this.authorRepository.find({ relations: ['books'] });
  }

  // CREATE AUTHOR
  async createAuthor(authorDto: AuthorDto) {
    const author = {
      ...authorDto,
      id: uuid(),
    };

    const authorCreated = this.authorRepository.create(author);
    const authorSaved = await this.authorRepository.save(authorCreated);
    console.log(authorSaved);
    return author.id;
  }

  async remove(id: string) {
    const response = await this.authorRepository.delete(id);
  }

  async updateAuthor(id: string, updateAuthorDto: UpdateAuthorDto) {
    const updatedAuthor: Author = {
      id: id,
      ...updateAuthorDto,
    };

    const author = await this.authorRepository.preload({
      id: id,
      ...updatedAuthor,
    });

    if (!author) {
      throw new NotFoundException(`Author with ID: ${id} was not found.`);
    }

    await this.authorRepository.save(author);
    return author.id;
  }
}
