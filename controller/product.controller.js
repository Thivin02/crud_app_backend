const express = require('express')
const app = express()
const Product = require('../models/product.model.js')


const getProduct =  async(req,res) => {
    // console.log("Hey There")
    // res.status(500).send("Hey There !")
    const result = await Product.find()
    res.status(500).json(result)
}



module.exports = {
    getProduct
}
