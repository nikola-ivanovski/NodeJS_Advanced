import { Router } from "express";
import ProductController from "../controllers/products.controller.js";

const productRouter = Router();
const productController = new ProductController();

productRouter.get("/", async (req, res) => {
  const products = await productController.getAllProducts();

  res.send(products);
});

productRouter.post("/", async (req, res) => {
  const { name, description, price, rating } = req.body;

  const productData = {
    name: name,
    description: description,
    price: price,
    rating: rating,
  };

  await productController.addProduct(productData);

  res.status(201).send({ message: "New product is created." });
});

productRouter.get("/:id", async (req, res) => {
  const id = req.params.id;

  const product = await productController.getProductById(id);
  res.send(product);
});

productRouter.post("/search", async (req, res) => {
  const title = req.body.name;

  const product = await productController.searchByName(title);
  res.send(product);
});

productRouter.post("/add_to_cart", async (req, res) => {
  const id = req.body.id;
  const product = await productController.addToCart(id);
  res.send(product);
});
export default productRouter;
