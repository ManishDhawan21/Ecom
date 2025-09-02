import mongoose  from "mongoose";
import 'dotenv/config';

mongoose.connect(process.env.DB_URL).
then(()=>console.log("connected")).
catch(err=>console.log('connection failed'))