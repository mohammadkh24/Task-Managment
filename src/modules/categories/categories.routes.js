const express = require("express");
const controller = require("./categories.controller");
const { auth } = require("../../middlewares/auth");
const {createCategoryValidator} = require("./categories.validator");
const validate = require("../../middlewares/validate");
const router = express.Router();

router
  .route("/")
  .get(auth, controller.getAll)
  .post(auth,createCategoryValidator, validate ,controller.create);
 
router
  .route("/:id")
  .delete(auth, controller.remove)
  .patch(auth, controller.update);

module.exports = router;
