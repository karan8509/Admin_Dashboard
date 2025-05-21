const cloudinary = require("../config/cloudinary")
const Product = require("../models/product.Model")
const createProduct = async (req, res) => {
    try {
        const { name, description, price, category, image } = req.body
        console.log(name, description, price, category, image)
        const cloudinaryResponse = null
        if (image) {
            cloudinaryResponse = await cloudinary.uploader.upload(image, { folder: "Products" })
        }
        const product = await Product.create({
            name, description, price, category,
            image: cloudinaryResponse?.secure_url ? cloudinaryResponse.secure_url : ""
        })
        res.json(product)

    } catch (error) {
        console.log("Error in CreateProduct Controllers")
        res.json({ message: "Server error" || error.message, success: false })
    }
}

module.exports = createProduct