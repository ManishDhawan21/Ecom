import AccountModel from "../Model/AccountModel.js"
import { comparePassword, hashPassword } from "../utils/utils.js"
import { blacklistToken, genrateToken } from "../utils/jwt.js"

//signup
export const signup = async (request,response)=>{
   try{
     const data = request.body
    const signupData = {
        name:String(data.name),
        email:String(data.email),
        password:String(hashPassword(data.password)),
        role:String(data.role)

    }
    const DbRes = await AccountModel.create(signupData)
    if(DbRes){
        response.json({
            status:"success",
            message:"signup succesfully"
        })
    }else{
        response.json({
            status:"failed",
            message:"invalid details"
        })
    }
   }catch(err){
       response.json({
            status:"failed",
            error:err
        })
   }
}

//signin
export const signIn = async (request,response)=>{
   try{
     const data = request.body
    const query = {
        email:String(data.email)
    }
    
    const dbRes = await AccountModel.findOne(query,{name:1,password:1,role:1})
    if(dbRes){
        
        if(comparePassword(data.password,dbRes.password)){
            const payload= {
                name:dbRes.name,
                id:dbRes._id,
                role:dbRes.role
            }
            const token = await genrateToken(payload)
            response.json({
                status:"success",
                token:token,
                user_info:{
                    name:dbRes.name,
                    role:dbRes.role
                }

            })
        }
    }
    else{
        response.json({
            status:"failed",
            message:"Invalid email or password"
        })
    }
   }
   catch(err){
      response.json({
        status:"failed",
        message:"bad request"
      })
   }
}

export const logout =async (request,response,next)=>{
 try{
       const isLoggedOut = blacklistToken(request.headers.authorization?.split(' ')[1]);
    if(isLoggedOut){
        response.json({
            status:"success",
            message:"logout seccessful"

        })
    }else{
        response.json({
            status:"failed",
            message:"logout failed"
        })
    }
 }catch(err){
    response.json({
         status:"failed",
         message:"bad request"
    })
 }
}