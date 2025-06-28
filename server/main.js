const express = require("express");
const Connection = require("./src/config/db");
const cors = require("cors")
const bodyParser = require("body-parser")
const auth = require("./src/routes/authRoute")
const productRoute = require("./src/routes/productRoute")
const app = express();


app.use(express.json({ limit: '10mb' }))

app.use(bodyParser.json());// JSON data parse karega
app.use(bodyParser.urlencoded({ extended: true })); // form data parse karega
app.use(cors())
app.use("/api/auth" , auth)
app.use("/api/product"  , productRoute)
const port = process.env.PORT || 9000

const startServer = async () => { 
    try {
        await Connection()
        app.listen(port, () => {
            console.log(`server on  http://localhost:${port}`)
        })
    } catch (error) {
       console.log("Server Failed ")
    }
}
startServer()
