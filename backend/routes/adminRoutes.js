
const express = require("express");
const router = express.Router(); // ✅ THIS LINE IS MISSING
const jwt = require("jsonwebtoken");
const verifyToken = require("../middleware/verifyToken");

// ✅ Now you can use router.post, router.get, etc.
router.post("/", verifyToken, async (req, res) => {
  // your logic here
});

module.exports = router;
