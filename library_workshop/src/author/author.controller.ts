import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AuthorService } from './author.service';
import { AuthorDto, UpdateAuthorDto } from './dto/author.dto';

@Controller('author')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Get()
  async getAuthors() {
    return this.authorService.getAuthors();
  }

  @Post()
  async createAuthors(@Body() authorDto: AuthorDto) {
    const id = await this.authorService.createAuthor(authorDto);

    return {
      message: 'Author was created!',
      id: id,
    };
  }

  @Delete()
  async deleteAuthor(@Param() id: string) {
    await this.authorService.remove(id);

    return {
      message: `Author with ID: ${id} was deleted.`,
    };
  }

  @Put()
  async updateAuthor(
    @Param() id: string,
    @Body() updateAuthorDto: UpdateAuthorDto,
  ) {
    const idOfAuthor = await this.authorService.updateAuthor(
      id,
      updateAuthorDto,
    );

    return {
      message: 'Author was updated',
      id: idOfAuthor,
    };
  }
}
