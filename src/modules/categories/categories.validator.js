const { body } = require("express-validator");

exports.createCategoryValidator = [
  body("title")
    .notEmpty()
    .withMessage("Title is required")
    .isLength({ min: 2, max: 50 })
    .withMessage("Title must be between 2 and 50 characters"),
];
