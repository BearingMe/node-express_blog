import * as expressValidator from "express-validator";

export const loginSchema = expressValidator.checkSchema({
  // email input validation
  email: {
    exists: {
      errorMessage: "Email is required",
    },
    isEmail: {
      errorMessage: "Invalid email address",
    },
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

export const registerSchema = expressValidator.checkSchema({
  // user input validation
  user: {
    exists: {
      errorMessage: "Username is required",
    },
    isLength: {
      options: { min: 3, max: 20 },
      errorMessage: "Username must be between 3 and 20 characters",
    },
  },

  // email input validation
  email: {
    exists: {
      errorMessage: "Email is required",
    },
    isEmail: {
      errorMessage: "Invalid email address",
    },
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

  // password confirmation input validation
  password2: {
    exists: {
      errorMessage: "Password confirmation is required",
    },
    isLength: {
      options: { min: 8 },
      errorMessage: "Password must be at least 8 characters long",
    },
    custom: {
      options: (value, { req }) => {
        if (value !== req.body.password1) {
          throw new Error("Passwords do not match");
        }

        return true;
      },
    },
  },
});
