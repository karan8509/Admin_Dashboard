const mongoose = require("mongoose")

const UserSechema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: [true, "email is required "],
        unique: true
    },
    password: {
        type: String,
        required: [true, "password is required"]
    },
    role: {
        type: String,
        esum: ["user", "admin"],
        default: "user"
    },

    // cartItem : [
    //     {
    //        quantity : {
    //         type : Number ,
    //         quantity : 0
    //        }
    //        ,
    //        product : {
    //         type : mongoose.Types.ObjectId
    //        }
    //     }
    // ]
})

const User = mongoose.model("User", UserSechema)
module.exports = User