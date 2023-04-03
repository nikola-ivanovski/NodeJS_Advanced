import ProductModel from "../models/products.model.js";

const productModel = new ProductModel();

class ProductController {
  async getAllProducts() {
    const products = await productModel.getAllProducts();
    return products;
  }

  async addProduct(productData) {
    await productModel.addProduct(productData);
  }

  async getProductById(productId) {
    const product = await productModel.getProductById(productId);
    return product;
  }

  async searchByName(name) {
    const product = await productModel.searchByName(name);
    return product;
  }

  async addToCart(productId) {
    const product = await productModel.addToCart(productId);
    return product;
  }
}

export default ProductController;
