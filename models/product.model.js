const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
    {
        name : {
            type : String,
            required : [ true, 'Please Enter product name']
        },
        quantity : {
            type : Number,
            required : [true, 'Please Enter a valid Price'],
            default : 0
        },
        price : {
            type : Number,
            required : true
        },
        image : {
            type : String,
            required : false
        },

    },
    {
        timestamps : true
    }   
);


const Product = mongoose.model('Product', ProductSchema)

module.exports = Product;