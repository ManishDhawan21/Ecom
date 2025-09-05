import mongoose from "mongoose";
import "../db/db.js"
import { collections } from "../db/collection.js";

const ProductSchema  = new mongoose.Schema({
  product_name:{type:String,required:[true,"product name is required"]},
  cat_id :{type:String,required:[true,"category id  is required"]},
  sub_cat_id:{type:String,required:[true,"sub category id is required"]},
  product_price:{type:Number,required:[true,"product name is required"]},
  product_rating:{type:Number,min:1,max:5,required:true},
  product_stock:{type:Number},
  product_discount:{type:Number,min:0,max:100,},
  product_image:{type:String},
  product_image_2:{type:String},
  product_title:{type:String,requires:[true,'product title is required'],unique:true},
  product_meta:{type:String},
  product_description:{type:String}

})

const ProductModel = mongoose.model(collections.ex_product,ProductSchema)
export default ProductModel;