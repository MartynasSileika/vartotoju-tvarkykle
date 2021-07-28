const express = require("express");
const UserModel = require("../models/User");
const router = express.Router();

// create new user
router.post("/api/user/new", async (req, res) => {
  const gotNewUserData = req.body;
  console.log(" gotNewUserData", gotNewUserData);
  //   res.json('you are about to create a place');
  const newUser = new UserModel(gotNewUserData);
  try {
    const creatingNewUserResult = await newUser.save();
    res.json(creatingNewUserResult);
  } catch (error) {
    res.status(500).json(error);
  }
});

// get all Users
router.get("/api/user", async (req, res) => {
  try {
    const allUsersFromDb = await UserModel.find({});
    res.json(allUsersFromDb);
  } catch (error) {
    res.status(500).json();
  }
});

// delete a place
router.delete("/api/user/delete/:userId", async (req, res) => {
  const idOfItemToDelete = req.params.userId;
  try {
    const deleteResult = await UserModel.findByIdAndDelete(idOfItemToDelete);
    res.json(deleteResult);
  } catch (error) {
    res.status(500).json();
  }
});

// Update a User
router.put("/api/user/update/:userId", async (req, res) => {
  const idOfItemToUpdate = req.params.userId;
  const updatedUserData = req.body;
  try {
    const updateResult = await UserModel.findByIdAndUpdate(
      idOfItemToUpdate,
      updatedUserData
    );
    res.json(updateResult);
  } catch (error) {
    res.status(500).json();
  }
});

module.exports = router;
