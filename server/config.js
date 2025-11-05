import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.Mongo_Url);
    console.log("Database connected");
  } catch (error) {
    console.log("Error connecting to database", error);
  }
};

export default connectDB;