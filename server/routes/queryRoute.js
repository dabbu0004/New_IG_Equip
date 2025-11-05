import express from "express";
import {
  longQueryPostController,
  shortQueryPostController,
} from "../controllers/queryController.js";

const queryRoute = express.Router();

queryRoute.post("/shortquerypost", shortQueryPostController);
queryRoute.post("/longquerypost", longQueryPostController);

export default queryRoute;
