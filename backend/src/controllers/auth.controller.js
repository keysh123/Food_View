const userModel = require("../models/user.model");
const foodPartnerModel = require("../models/foodpartner.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const registerUser = async (req, res) => {
  const { fullName, email, password } = req.body;

  const isUserAlreadyExists = await userModel.findOne({ email });

  if (isUserAlreadyExists) {
    return res.status(400).json({
      message: "User Already Exists",
    });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await userModel.create({
    fullName,
    password: hashedPassword,
    email,
  });
  const token = await jwt.sign(
    {
      id: user._id,
    },
    "1234",
    { expiresIn: "24h" }
  );
  res.cookie("token", token);
  res.status(201).json({
    message: "User registered successfully",
    user: {
      _id: user._id,
      email: user.email,
      fullName: user.fullName,
    },
  });
};
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email });

  if (!user) {
    return res.status(400).json({
      message: "No user with specific email",
    });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(400).json({
      message: "Invalid password",
    });
  }

  const token = await jwt.sign(
    {
      id: user._id,
    },
    "1234",
    { expiresIn: "24h" }
  );
  res.cookie("token", token);
  res.status(200).json({
    message: "User login successfully",
    user: {
      _id: user._id,
      email: user.email,
      fullName: user.fullName,
    },
  });
};

const logoutUser = async (req, res) => {
  res.clearCookie("token");
  res.status(200).json({
    message: "User logged out successfully",
  });
};

const registerFoodPartner = async (req, res) => {
  const { fullName, email, password } = req.body;

  const isUserAlreadyExists = await foodPartnerModel.findOne({ email });

  if (isUserAlreadyExists) {
    return res.status(400).json({
      message: "User Already Exists",
    });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await foodPartnerModel.create({
    fullName,
    password: hashedPassword,
    email,
  });
  const token = await jwt.sign(
    {
      id: user._id,
    },
    "1234",
    { expiresIn: "24h" }
  );
  res.cookie("token", token);
  res.status(201).json({
    message: "FoodPartner registered successfully",
    FoodPartner: {
      _id: user._id,
      email: user.email,
      fullName: user.fullName,
    },
  });
};
const loginFoodPartner = async (req, res) => {
  const { email, password } = req.body;

  const user = await foodPartnerModel.findOne({ email });

  if (!user) {
    return res.status(400).json({
      message: "No user with specific email",
    });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(400).json({
      message: "Invalid password",
    });
  }

  const token = await jwt.sign(
    {
      id: user._id,
    },
    "1234",
    { expiresIn: "24h" }
  );
  res.cookie("token", token);
  res.status(200).json({
    message: "User login successfully",
    foodPartner: {
      _id: user._id,
      email: user.email,
      fullName: user.fullName,
    },
  });
};

const logoutFoodPartner = async (req, res) => {
  res.clearCookie("token");
  res.status(200).json({
    message: "FoodPartner logged out successfully",
  });
};

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  registerFoodPartner,
  loginFoodPartner,
  logoutFoodPartner
};
