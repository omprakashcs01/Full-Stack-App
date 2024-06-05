const express = require("express");
const {
  registerController,
  loginController,
} = require("../controller/userController");

//router object registration

const router = express.Router();

//routs

//register routes||POST requests

router.post("/register", registerController);

//Login routes||POST requests
router.post("/login", loginController);

//export
module.exports = router;
