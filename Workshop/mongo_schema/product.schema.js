import mongoose from "mongoose";

const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  rating: {
    type: Number,
  },
  reviews: {
    type: [
      {
        type: Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
  },
});

// productSchema.statics.searchByName = function (name, callback) {
//   const regex = new RegExp(name, "i");
//   return this.find({ name: regex }, callback);
// };

export default productSchema;
