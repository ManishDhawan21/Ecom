import mongoose from "mongoose";
import "../db/db.js"
import { collections } from "../db/collection.js";

const categorySchema = new mongoose.Schema({
     category_title :{type:String,required:[true,"category title is required"],unique:true},
     category_name:{type:String,required:[true,"category name is required"]},
     category_image:{type:String},
     category_meta:{type:String}
},{timestamps:true})

const CategoryModel = mongoose.model(collections.ex_category,categorySchema)
export default CategoryModel;