const express = require("express");
const controller = require("./tasks.controller");
const { auth } = require("../../middlewares/auth");
const { createTaskValidator } = require("./tasks.validator");
const validate = require("../../middlewares/validate");

const router = express.Router();

router
  .route("/")
  .get(auth, controller.getAll)
  .post(auth, createTaskValidator, validate, controller.create);

router
  .route("/:id")
  .patch(auth, createTaskValidator, validate, controller.update)
  .delete(auth, controller.remove)
  .get(auth, controller.getOne);

router.patch("/:id/status", auth, controller.changeStatus);

module.exports = router;
