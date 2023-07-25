import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import { userRouter } from "./routes/users.js";
import { recipesRouter } from "./routes/recipes.js";
import { ingredientsRouter } from "./routes/ingredients.js";
const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", UserRouter);

mongoose.connect(
  "mongodb+srv://recipe:recipe@cluster0.d1gsldk.mongodb.net/recipes?retryWrites=true&w=majority"
);

app.listen(3001, () => console.log("SERVER STARTED"));
