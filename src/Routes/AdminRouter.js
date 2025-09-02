import express from 'express';
import { addCategory,  getCategories, } from '../Controller/categoryController.js';
import { adminMiddleware, AuthMiddleware } from '../Middleware/AuthMiddleware.js';
import upload from '../Middleware/UploadMiddleware.js';
import { addSubCategory, getSubCategories } from '../Controller/subCategoryController.js';
import { addProduct } from '../Controller/productController.js';

const adminRouter = express.Router();

// adminRouter.use(AuthMiddleware);
// adminRouter.use(adminMiddleware)

//category
adminRouter.post('/addCategory',upload.single("image") ,addCategory);
adminRouter.get('/getAllCategory',getCategories);


//sub Category
adminRouter.post('/addSubCategory',addSubCategory);
adminRouter.get("/getSubCategories",getSubCategories);

//product
adminRouter.post('/addProduct',upload.fields([{name:"image1"},{name:"image2"}]),addProduct)

export default adminRouter;