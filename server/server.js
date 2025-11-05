import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import connectDB from "./config.js";
import pingRoute from "./routes/pingRoute.js";
import queryRoute from "./routes/queryRoute.js";

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.use("/", pingRoute);
app.use("/query", queryRoute);
connectDB();
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server Listening on port ${process.env.PORT || 3000}`);
});
