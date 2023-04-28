import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductEntity } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductDto, UpdateProductDto } from 'src/dto/dto';
import { Product } from 'src/interfaces/interfaces';
import { v4 as uuid } from 'uuid';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
  ) {}
  // GET ALL PRODUCTS
  async getProducts() {
    return this.productRepository.find();
  }

  // GET PRODUCT BY ID
  async getProductById(id: string) {
    return await this.productRepository.findOneBy({ id: id });
  }

  // CREATE PRODUCT
  async createProduct(productDto: ProductDto) {
    const product: Product = {
      ...productDto,
      id: uuid(),
    };

    const productCreated = this.productRepository.create(product);
    const productSaved = await this.productRepository.save(productCreated);

    console.log(productSaved);
    return product.id;
  }

  // DELETE
  async remove(id: string) {
    return await this.productRepository.delete(id);
  }

  async updateProduct(id: string, updateProductDto: UpdateProductDto) {
    const updatedProduct: Product = {
      id: id,
      ...updateProductDto,
    };

    const product = await this.productRepository.preload({
      id: id,
      ...updatedProduct,
    });

    if (!product) {
      throw new NotFoundException(
        `Product with ID: ${id} was not found to update.`,
      );
    }

    await this.productRepository.save(product);

    return product.id;
  }
}
