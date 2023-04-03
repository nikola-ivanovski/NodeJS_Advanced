import mongoose from "mongoose";

import productSchema from "../mongo_schema/product.schema.js";
import cart from "../mongo_schema/cart.schema.js";

class ProductModel {
  mongo_model;

  constructor() {
    this.mongo_model = mongoose.model("Product", productSchema);
  }

  async getAllProducts() {
    const products = await this.mongo_model.find().populate("reviews");
    return products;
  }

  async addProduct(productData) {
    const product = new this.mongo_model(productData);
    const response = await product.save();
  }

  async getProductById(productId) {
    const product = await this.mongo_model.findById(productId);
    return product;
  }

  async searchByName(keyword) {
    const product = await this.mongo_model.find({ name: { $regex: keyword } });
    return product;
  }

  async addToCart(productId) {
    const product = await this.mongo_model.findById(productId);
    cart.products.push(product);
    return cart;
  }
}

export default ProductModel;
