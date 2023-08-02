const express = require("express");
router = express.Router();

const {
  registerUser,
  loginUser,
  getMe,
} = require("../controllers/userController");

const { protect } = require("../middleware/authMiddleware");

router.get("/me", protect, getMe);
router.post("/", registerUser);
router.post("/login", loginUser);

module.exports = router;
