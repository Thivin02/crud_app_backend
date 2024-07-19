const express = require("express")
const mongoose = require("mongoose")
const Product = require("./models/product.model.js")
const proroute = require("./routes/product.routes.js")
const app = express()
app.use(express.json())

app.use("/product", proroute);  

app.get("/", async(req,res) => {
    // console.log("Hey There")
    const result = await Product.find()
    res.status(500).json(result)
})

app.post("/add", async(req,res) => {
    try {
        const product = await Product.create(req.body)
        res.send(product)
    }
    catch(err){
        res.status(500).json({"message" : "Not received"})
    }
})

mongoose.connect('mongodb://127.0.0.1:27017/crud_app').then(() =>{
    console.log("Connected to DB!")
    app.listen(3000, () => {
        console.log("Server started and running at port 3000")
    })
}).catch(() => {
    console.error("Connection Failed")
})

