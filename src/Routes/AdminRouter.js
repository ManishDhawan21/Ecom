import express from 'express';
import { addCategory,  deleteCategory,  getCategories, updateCategory, } from '../Controller/categoryController.js';
import { adminMiddleware, AuthMiddleware } from '../Middleware/AuthMiddleware.js';
import upload from '../Middleware/UploadMiddleware.js';
import { addSubCategory, deleteSubCategory, getSubCategories, updateSubCategory } from '../Controller/subCategoryController.js';
import { addProduct, deleteProduct, getProduct, updateProduct } from '../Controller/productController.js';

const adminRouter = express.Router();

// adminRouter.use(AuthMiddleware);
// adminRouter.use(adminMiddleware)

//category
adminRouter.post('/addCategory',upload.single("image") ,addCategory);
adminRouter.get('/getAllCategory',getCategories);
adminRouter.put('/updateCategory/:id',upload.single("image"),updateCategory)
adminRouter.delete('/deleteCategory/:id',deleteCategory)


//sub Category
adminRouter.post('/addSubCategory',addSubCategory);
adminRouter.get('/getSubCategories',getSubCategories);
adminRouter.put('/updateSubCategory/:id',updateSubCategory)
adminRouter.delete('/deleteSubCategory/:id',deleteSubCategory)

//product
adminRouter.post('/addProduct',upload.fields([{name:"image1"},{name:"image2"}]),addProduct)
adminRouter.get('/getProduct',getProduct)
adminRouter.put('/updateProduct/:id',upload.fields([{name:"image1"},{name:"image2"}]),updateProduct),
adminRouter.delete('/deleteProduct/:id',deleteProduct)


export default adminRouter;