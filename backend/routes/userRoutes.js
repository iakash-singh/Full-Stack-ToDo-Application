const express = require("express");
const { body } = require("express-validator");
const { registerUser, loginUser } = require("../controllers/authController");
const validationMiddleware = require("../middleware/validationMiddleware");

const router = express.Router();


router.post(
  "/register",
  [body("username").notEmpty().withMessage("Username is required"), body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long")],
  validationMiddleware,
  registerUser
);


router.post(
  "/login",
  [body("username").notEmpty().withMessage("Username is required"), body("password").notEmpty().withMessage("Password is required")],
  validationMiddleware,
  loginUser
);

module.exports = router;
