const cloudinary = require("../config/cloudinary")
const Product = require("../models/product.Model")



const getAllProduct = async (req, res) => {
    try {
        const product = await Product.find({});
        if (product.length === 0) {
            res.json({ message: "No products found", success: false })
            return;
        }
        res.json({ product })
    } catch (error) {
        res.json({ message: "Something Went Wrong", error: error.message })
    }
}
const createProduct = async (req, res) => {
    try {
        const { name, descripation, price, category, image } = req. body
        console.log(name, descripation, price, category, image)
        let cloudinaryResponse = null
        try {
            cloudinaryResponse = await cloudinary.uploader.upload(image, { folder: "Products" })
            console.log(cloudinaryResponse)
        } catch (error) {
            console.log(error.message)
        }
        const products = await Product.create({
            name, descripation, price, category,
            image,
        })

        if (!products) {
            console.log("not found")
        } else {
            console.log("product")
        }
        console.log("-->", products)
        res.json(products)


    } catch (error) {
        console.log("Error in CreateProduct Controllers", error.message)
        res.json({ message: error.message, success: false })
    }
}


module.exports = { createProduct, getAllProduct }   