import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductDto, UpdateProductDto } from 'src/dto/dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  // GET ALL PRODUCTS
  @Get()
  async getProducts() {
    return await this.productService.getProducts();
  }

  // GET PRODUCT BY ID
  @Get(':id')
  async getProductById(@Param('id') id: string) {
    return await this.productService.getProductById(id);
  }

  // CREATE PRODUCT
  @Post()
  async create(@Body() body: ProductDto) {
    const id = this.productService.createProduct(body);

    return {
      message: 'Product was created.',
      id: id,
    };
  }

  // DELETE PRODUCT BY ID
  @Delete(':id')
  async deleteOne(@Param('id') id: string) {
    await this.productService.remove(id);

    return {
      message: `Task with id: ${id} was removed.`,
    };
  }

  @Put(':id')
  async updateProduct(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    const idOfProduct = await this.productService.updateProduct(
      id,
      updateProductDto,
    );
    return {
      message: 'Product was updated',
      id: idOfProduct,
    };
  }
}
