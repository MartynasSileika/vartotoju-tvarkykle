const express = require("express");
const router = express.Router();

// create new user
router.post("/api/user/new", (req, res) => {
  res.json("you are about to create a new user");
});

module.exports = router;
