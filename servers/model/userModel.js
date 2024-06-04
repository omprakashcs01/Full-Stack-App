const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please Add your name"],
      trim: true,
    },

    email: {
      type: String,
      required: [true, "Please Add your email"],
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please Add your password"],
      min: 6,
      max: 64,
    },

    role: {
      type: String,
      default: "user",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
