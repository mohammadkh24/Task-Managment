const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const model = mongoose.model("User", userSchema);

module.exports = model;
