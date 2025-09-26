import express from 'express'
import { fileURLToPath } from 'url';
import accountRouter from './src/Routes/AccountRouter.js';
import adminRouter from './src/Routes/AdminRouter.js';
import path from 'path';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import cors from 'cors';
import compression from "compression";



const app = express();
app.use(express.json())
app.use(cors());
//app.use(helmet())

app.use(cookieParser())
app.use(express.urlencoded({ extended: true }));
app.use(compression());
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);
app.use('/images',express.static(__dirname+'public/images'))

app.use(express.static(path.join(__dirname,"dist")))
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,"dist","index.html"))
})

//signup & signinn
app.use('/api/v2/account',accountRouter)
//admin
app.use('/api/v2/admin',adminRouter)


export default app;