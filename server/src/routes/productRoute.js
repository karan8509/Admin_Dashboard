
const express= require("express");
const createProduct = require("../controllers/productController");

const  products = express.Router();

products.post("/create" , createProduct)

module.exports = products