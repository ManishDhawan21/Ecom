import { body, validationResult } from "express-validator";

export const Validator = {
   SignUpValidator() {
      const validatorField = [
         body("name").escape().trim().notEmpty()
            .matches(/^[a-zA-Z ]{3,16}$/)
            .withMessage("Username must be 3-16 alphabetic characters"),

         body('email').isEmail()
            .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
            .withMessage('email is invalid'),

         body("password")
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/)
            .withMessage("Password must be at least 8 characters, with uppercase, lowercase, number, and special character"),

         (request, response, next) => {
            const errors = validationResult(request)
            if (!errors.isEmpty()) {
               response.status(404).json({ errors: errors.array() })
            }
            next()
         }

      ]
      return validatorField;
   },


   SignIn() {
      const validateField = [

         body('email').isEmail()
            .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
            .withMessage('email is invalid'),


         body("password")
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/)
            .withMessage("Password must be at least 8 characters, with uppercase, lowercase, number, and special character"),

         (req, res, next) => {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
               return res.status(400).json({ errors: errors.array() })
            }
            next();
         }

      ]
      return validateField;
   }
}