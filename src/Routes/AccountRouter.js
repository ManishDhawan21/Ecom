import express from 'express';
import { logout, signIn, signup } from '../Controller/accountController.js';
import { Validator } from '../Middleware/validator.js';
import { adminMiddleware } from '../Middleware/AuthMiddleware.js';

const accountRouter = express.Router()

accountRouter.post('/signup',Validator.SignUpValidator(),signup)
accountRouter.post('/signin',Validator.SignIn(),signIn)
accountRouter.post('/logout',adminMiddleware,logout)

export default accountRouter;