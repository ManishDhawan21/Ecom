import jwt from "jsonwebtoken";
import 'dotenv/config'

const blacklist = new Set();

export const genrateToken = async (payload)=>{
    return await jwt.sign(payload,process.env.SECRET_KEY,{expiresIn:"5d"})
}

export const verifyToken = (token)=>{
    if(blacklist.has(token))
        return false;
    return jwt.verify(token,process.env.SECRET_KEY)
}

export const blacklistToken =(token)=>{
   const verifyData = jwt.verify(token,process.env.SECRET_KEY)
   if(verifyData){
    blacklist.add(token);
    return true;
   }
   else{
    return false;
   }
} 