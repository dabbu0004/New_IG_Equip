import mongoose from "mongoose";

const QueriesSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String },
  },
  { timestamps: true }
);

const shortQueriesModel = mongoose.model("ShortQueries", QueriesSchema);

export default shortQueriesModel;
