const express = require("express");
const {otpVerifyValidator , sentOtpValidator} = require("./auth.validator");
const validate = require("../../middlewares/validate");
const { auth } = require("../../middlewares/auth");
const controller = require("./auth.controller")

const router = express.Router();

router.route("/send").post(sentOtpValidator, validate, controller.send);
router.route("/verify").post(otpVerifyValidator, controller.verify);
router.route("/me").get(auth, controller.getMe);

module.exports = router