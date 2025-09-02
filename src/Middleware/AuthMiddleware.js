import { verifyToken } from "../utils/jwt.js";

export const AuthMiddleware = (req, res, next) => {
    try {
        const token = req.headers["authorization"].split(' ')[1];
        
        const verifyData = verifyToken(token)
        if (verifyData) {
            req.id = verifyData.id
            next();
        } else {
            res.status(403).json({
                status: "failed",
                message: "unauthorized access"
            })
        }
    }
    catch (err) {
          res.status(403).json({
                status: "failed",
                message: "unauthorized denied"
            })
    }
}



export const adminMiddleware = (req, res, next) => {
    try {
        const token = req.headers["authorization"].split(' ')[1];
        
        const verifyData = verifyToken(token)
        if (verifyData) {
            if(verifyData.role === "admin"){
            req.id = verifyData.id
            next();
            }
        else{
             res.status(403).json({
                status: "failed",
                role:"Your Role is unauthorized",
                message: "unauthorized access"
            }) 
        }
          
        } else {
            res.status(403).json({
                status: "failed",
                message: "unauthorized access"
            })
        }
    }
    catch (err) {
          res.status(403).json({
                status: "failed",
                message: "unauthorized denied"
            })
    }
}