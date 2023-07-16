import express from "express";
// import "./config/mongoConnect.js";
import router from "./routes/appRouter.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

//middlewares
app.use(cors());
app.use(express.json());

app.use("/api/leathers", router);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.get("/", (req, res) => {
  res.send("Server is Ready");
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8800;
}


app.listen(port, () => {
  connect();
  console.log("Connected to backend.");
});
