const mongoose = require("mongoose");

const UserModel = mongoose.model(
  "User",
  new mongoose.Schema(
    {
      name: String,
      surName: String,
      email: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
    },
    { timestamps: true }
  )
);

module.exports = UserModel;
