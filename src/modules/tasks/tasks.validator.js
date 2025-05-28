const { body } = require("express-validator");

exports.createTaskValidator = [
  body("title")
    .notEmpty()
    .withMessage("Title is required")
    .isLength({ min: 2, max: 100 })
    .withMessage("Title must be between 2 and 100 characters"),

  body("description")
    .optional()
    .isString()
    .withMessage("Description must be a string"),

  body("status")
    .optional()
    .isIn(["pending", "completed"])
    .withMessage("Status must be either 'pending' or 'completed'"),

  body("category")
    .optional()
    .isMongoId()
    .withMessage("Category must be a valid MongoDB ObjectId"),
];
