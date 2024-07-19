const express = require ("express")
const Product = require ("../models/product.model.js")
const {getProduct} = require ("../controller/product.controller.js")
const router = express.Router()
// router.use(express.json())

router.get("/", getProduct)

router.post("/add", async(req,res) => {
    try {
        const product = await Product.create(req.body)
        res.send(product)
    }
    catch(err){
        res.status(500).json({"message" : "Not received"})
    }
})

router.get("/:id", async(req,res)=> {
    // console.log(req.params.id)
    const val = req.params.id
    // console.log(val)
    const product = await Product.findById(val)
    res.status(500).json(product)
    // res.send("OK")
})

router.put("/update/:id", async(req,res) => {
    const value = req.params.id
    const product = await Product.findByIdAndUpdate(value,req.body)
    res.status(500).json(product)
})

router.delete("/remove/:id", async (req,res) => {
    const item = req.params.id
    const product = await Product.findByIdAndDelete(item)
    res.status(500).json(product)
})

module.exports = router;