import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { UserModel } from "../models/User.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const user = await UserModel.findOne({ username });

  if (user) {
    return res.json({ message: "Username already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new UserModel({
    username,
    password: hashedPassword,
  });
  newUser.save();

  res.json({ message: "User created" });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await UserModel.findOne({ username });

  if (!user) {
    return res.json({ message: "User doesnt exist!" });
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.json({ message: "Username or password is incorrect" });
  }

  const token = jwt.sign({ id: user._id }, "secret");
  res.json({ token, userID: user._id });//end of login  by sending token
});

export { router as userRouter };
