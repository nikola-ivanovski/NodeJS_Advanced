import mongoose from "mongoose";

const { Schema } = mongoose;

const cart = new Schema({
  products: [],
});

export default cart;
