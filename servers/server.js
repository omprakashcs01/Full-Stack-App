const express = require("express");
const cors = require("cors");
const colors = require("colors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/DB.JS");

//config DOTENV
dotenv.config();

//mongoDB connection

connectDB();

//Rest OBJECTS

const app = express();

//middleware

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//ROUTES


app.use("/api/v1/auth", require("./routes/userRoutes"))






// default routes
// app.use("", (req, res) => {
//   res.status(200).json({
//     success: true,
//     message: "Welcome to Full Stack App",
//   });
// });







//port
const PORT = process.env.PORT || 8081;

//listen

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`.bgGreen.white);
});
