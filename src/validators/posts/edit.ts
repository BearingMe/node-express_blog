import * as expressValidator from "express-validator";

export const editSchema = expressValidator.checkSchema({
  title: {
    in: "body",
    isString: true,
    isLength: {
      options: { min: 1, max: 100 },
      errorMessage: "Title must be between 1 and 100 characters",
    },
  },

  body: {
    in: "body",
    isString: true,
    isLength: {
      options: { min: 1, max: 10000 },
      errorMessage: "Body must be between 1 and 10000 characters",
    },
  },
});
