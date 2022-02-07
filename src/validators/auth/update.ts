import * as expressValidator from "express-validator";

export const updateSchema = expressValidator.checkSchema({
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

    isLength: {
      options: { min: 3, max: 100 },
      errorMessage: "Email must be between 3 and 100 characters",
    },
  },

  image: {
    exists: {
      errorMessage: "Image is required",
    },

    isURL: {
      errorMessage: "Invalid image URL",
    },

    isLength: {
      options: { max: 255 },
      errorMessage: "Image URL must be less than 255 characters",
    },
  },
});
