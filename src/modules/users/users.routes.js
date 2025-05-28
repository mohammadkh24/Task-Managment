const express = require("express");
const { auth } = require("../../middlewares/auth");
const controller = require("./users.controller");

const router = express.Router();

router.route("/update").patch(auth, controller.update);
router.route("/remove").delete(auth, controller.remove);

module.exports = router;