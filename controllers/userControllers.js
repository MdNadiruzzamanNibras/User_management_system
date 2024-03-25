const User = require("../models/userModel");

const loggerRestration = async (req, res) => {
  try {
    res.render("registration");
  } catch (error) {
    console.log(error.message);
  }
};
