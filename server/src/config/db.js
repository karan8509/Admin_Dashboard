const mongoose = require("mongoose")
require("dotenv").config()
const Connection = async () => {
    try {
           await mongoose.connect(process.env.DB_URL)
           console.log("On DB")
    } catch (error) {
           console.log("Failed DB" ,error.messsage)
    }
}

module.exports = Connection;