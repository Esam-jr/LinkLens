import { json } from "express";
import User from "./../models/User.js";

export async function signup(req, res) {
  const { fullName, email, password } = req.body;

  try {
    if (!email || !password || !fullName) {
      return res.status(400).json({ message: "Please fill all the fields" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res
        .status(400)
        .json({ message: "Please enter a valid email address" });
    }

    const existingUser = User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const idx = Math.floor(Math.random() * 100) + 1;
    const randomAvatar = `https://avatar.iran.liara.run/public/${idx}.png`;

    const newUser = new User({
      fullName,
      email,
      password,
      profilePic: randomAvatar,
    });

    // TODO: CREATE THE USER IN STEAM AS WELL

    const token = jwt.sign({ userid: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.cookie("jwt", token, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    res.status(200).json({
      suceess: true,
      message: `User created successfully`,
      user: newUser,
      token,
    });

    await newUser.save();
  } catch (error) {
    console.log("Error in Signup controller");
    res.status(500).json({ message: "Internal server error" });
  }
}
export async function login(req, res) {
  res.send("Login page");
}
export function logout(req, res) {
  res.send("Logout page");
}
