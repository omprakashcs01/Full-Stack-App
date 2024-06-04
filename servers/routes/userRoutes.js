const express = require("express");
const { registerController } = require("../controller/userController");

//router object registration

const router = express.Router();

//routs

router.post("/register", registerController);
//export

module.exports = router;
