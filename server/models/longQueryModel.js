import mongoose from "mongoose";

const QueriesSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    companyName: { type: String, required: true },
    companyEmail: { type: String, required: true },
    location: { type: String, required: true },
    message: { type: String },
  },
  { timestamps: true }
);

const longQueriesModel = mongoose.model("LongQueries", QueriesSchema);

export default longQueriesModel;
