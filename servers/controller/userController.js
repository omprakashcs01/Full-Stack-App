const JWT = require("jsonwebtoken");
const { hashPassword, comparePassword } = require("../helper/authHelper");
const userModel = require("../model/userModel");
var { expressjwt: jwt } = require("express-jwt");

//middleware
const requireSignIn = jwt({
  secret: process.env.JWT_SECRET_KEY,
  algorithms: ["HS256"],
});

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
    //hashed password

    const hashedPassword = await hashPassword(password);
    ///save a new user
    const user = await userModel({
      name,
      email,
      password: hashedPassword,
    }).save();

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

//Login Controller
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    //validation for email and password

    if (!email || !password) {
      return res.status(403).send({
        success: false,
        message: "Please provide a valid email and password",
      });
    }

    //find User

    const user = await userModel.findOne({ email: email });

    if (!user) {
      return res.status(500).send({
        success: false,
        message: "User not found",
      });
    }

    //match password

    const match = await comparePassword(password, user.password);

    if (!match) {
      return res.status(500).send({
        success: false,
        message: "Invalid  username or password",
      });
    }

    // JWT token

    const token = await JWT.sign(
      { _id: user._id },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "7d",
      }
    );

    //undenied password
    user.password = undefined;

    //user login successfully
    res.status(200).send({
      success: true,
      message: "Login successfully completed",
      token,
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error In Login API",
    });
  }
};

//update user

const updateController = async (req, res) => {
  try {
    const { name, password, email } = req.body;
    //user find
    const user = await userModel.findOne({ email });
    //password validate
    if (password && password.length < 6) {
      return res.status(400).send({
        success: false,
        message: "Password is required and should be 6 character long",
      });
    }
    const hashedPassword = password ? await hashPassword(password) : undefined;
    //updated useer
    const updatedUser = await userModel.findOneAndUpdate(
      { email },
      {
        name: name || user.name,
        password: hashedPassword || user.password,
      },
      { new: true }
    );
    updatedUser.password = undefined;
    res.status(200).send({
      success: true,
      message: "Profile Updated Please Login",
      updatedUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In User Update Api",
      error,
    });
  }
};

module.exports = {
  registerController,
  loginController,
  updateController,
  requireSignIn,
};
