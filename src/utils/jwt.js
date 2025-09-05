import jwt from "jsonwebtoken";
import 'dotenv/config'
import client from "../redis/redis.js";

// const blacklist = new Set();

export const genrateToken = async (payload)=>{
    return await jwt.sign(payload,process.env.SECRET_KEY,{expiresIn:"5d"})
}

export const verifyToken = async (token)=>{
    if(!await client.get(token))
        return false;
    return jwt.verify(token,process.env.SECRET_KEY)


    
}

export const blacklistToken = async (token)=>{
   if(client.get(token)){
     await client.del(token);
     return true;
   }
   else{
    return false;
   }
} 