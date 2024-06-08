const express = require("express");
const {
  registerController,
  loginController,
  updateController,
} = require("../controller/userController");

//router object registration

const router = express.Router();

//routs

//register routes||POST requests

router.post("/register", registerController);

//Login routes||POST requests
router.post("/login", loginController);

//Update routes||PUT requests
router.put("/update", updateController);
//export
module.exports = router;
