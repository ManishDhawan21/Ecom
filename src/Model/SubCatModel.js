import mongoose from "mongoose";
import { collections } from "../db/collection.js";

const subCatSchema = new mongoose.Schema({
     sub_cat_title :{type:String,required:[true,"category title is required"],unique:true},
     cat_id:{type:String,required:[true,"cat_id is required"]},
     sub_cat_name:{type:String,required:[true,"category name is required"]},
     sub_cat_image:{type:String},
     sub_cat_meta:{type:String}
},{timestamps:true})

const SubCatModel = mongoose.model(collections.ex_subCategory,subCatSchema);
export default SubCatModel;