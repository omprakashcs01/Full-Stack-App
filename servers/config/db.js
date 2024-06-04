const mongoose = require("mongoose");

const colors = require("colors");

const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URL);
  console.log(` Connected to DB ${mongoose.connection.host}`.bgCyan.white);
  try {
  } catch (error) {
    console.log(`Error connecting to DB ${error}`.bgRed.white);
  }
};

module.exports =  connectDB;
