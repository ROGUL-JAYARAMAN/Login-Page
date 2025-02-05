import express from "express";
import bodyParser from "body-parser"
import dontenv from "dotenv";
import connectDB from "./database/connectDB.js";
import router from "./routes/authRoutes.js";

dontenv.config();
const app = express();
const port = process.env.PORT;

app.use(bodyParser.json())
app.use("/", router);

app.listen(port, () => {
  connectDB();  //calling the funtion to connect to database
  console.log("Backend Initiated");
});