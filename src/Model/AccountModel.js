import mongoose from "mongoose";
import "../db/db.js"
import { collections } from "../db/collection.js";

const AccountSchema = new mongoose.Schema({
    name: { type: String, required: [true, "name is required"] },
   
    email: { 
        type: String,
        unique: true,
        validate: {
            validator: function (v) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: "Please enter a valid email"
        },
        required: [true, "Email required"]
    },
    password: {
        type: String,
        // validate: {
        //     validator: function (v) {
        //         // Regex for a strong password:
        //         // - At least 8 characters long
        //         // - Contains at least one uppercase letter
        //         // - Contains at least one lowercase letter
        //         // - Contains at least one number
        //         // - Contains at least one special character
        //         return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/.test(v);
        //     },
        //     message: 'Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.',
        // }
        required:[true,"password is required"]
    },
    role: {
        type: String,
        enum: ["user","admin"],  
        default: "user"
    }
},{timestamps:true})

const AccountModel = mongoose.model(collections.signup, AccountSchema)
export default AccountModel;