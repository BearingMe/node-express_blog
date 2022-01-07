import * as expressValidator from "express-validator";

export default expressValidator.checkSchema({
  // email input validation
  email: {
    exists: {
      errorMessage: "Email is required",
    },
    isEmail: true,
    errorMessage: "Invalid email address",
  },

  // password input validation
  password1: {
    exists: {
      errorMessage: "Password is required",
    },
    isLength: {
      options: { min: 8 },
      errorMessage: "Password must be at least 8 characters long",
    },
  },
});
