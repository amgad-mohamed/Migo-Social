import User from "../models/user.js";
import { comparePassword, hashPassword } from "../helpers/auth.js";
import jwt from "jsonwebtoken";
export const register = async (req, res) => {
  const { name, email, password, secret } = req.body;
  if (!name) return res.json({ error: "Name is required" });
  if (!password || password.length < 6)
    return res.status(400).json({
      error: "Password is required and should be 6 character long",
    });

  if (!secret) return res.json({ error: "Answer is required" });

  if (!email) return res.json("Email is required");

  const exists = await User.findOne({ email });
  if (exists) return res.status(400).json("Email already exists");

  const hashedPassword = await hashPassword(password);
  const user = new User({
    name,
    email,
    password: hashedPassword,
    secret,
  });
  try {
    await user.save();
    return res.json({ ok: true });
  } catch (err) {
    console.log(err);
    return res.json({ status: "error", error: "Something went wrong" });
  }
};
export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json("Email is not registered");
  const match = await comparePassword(password, user.password);
  if (!match) return res.status(400).json("Invalid password");
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  user.password = undefined;
  user.secret = undefined;
  res.json({ token, user });
};

export const currentUser = async (req, res) => {
  try {
    const user = await User.findById(req.auth._id);

    res.json({ ok: true });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  } 
};
