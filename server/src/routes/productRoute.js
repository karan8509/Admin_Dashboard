
const express= require("express");
const {createProduct  , getAllProduct} = require("../controllers/productController");

const  products = express.Router();

products.get("/" , getAllProduct)
products.post("/create" , createProduct)

module.exports = products