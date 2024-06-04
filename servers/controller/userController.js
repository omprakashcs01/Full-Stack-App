const userModel = require("../model/userModel");

const registerController = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    //validate

    if (!name) {
      return res.status(400).send({
        success: false,
        message: "name is required",
      });
    }

    if (!email) {
      return res.status(400).send({
        success: false,
        message: "email is required",
      });
    }

    if (!password || password.length < 6) {
      return res.status(400).send({
        success: false,
        message: "password is required and must be at least 6 characters",
      });
    }

    //existing user

    const existingUser = await userModel.findOne({ email: email });

    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: "User Already registered with this email",
      });
    }
    ///save a new user
    const user = await userModel({ name, email, password }).save();

    return res.status(201).send({
      success: true,
      message: "User successfully registered",
    });
  } catch (error) {
    console.log(`Error registering controller ${error}`);

    return res.status(402).send({
      success: false,
      message: "User registration failed in registration API",
      error: error,
    });
  }
};

module.exports = { registerController };
