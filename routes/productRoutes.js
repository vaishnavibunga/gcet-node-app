import express from 'express'
import productModel from "../models/productModel.js";

const productRouter = express.Router()

productRouter.get("/all", async (req, res) => {
  const products = await productModel.find();
  res.json(products);
});

productRouter.post("/new", async (req, res) => {
  const product = req.body
  const products = await productModel.create(product);
  res.json(products);
});

export default productRouter