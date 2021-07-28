const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    email: {
      type: Number,
      required: true,
      min: 0,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } /// adds timestamps
);

// exportuoti naujai sukurta objekta pagal sia schema
//                           turetu buti vienaskai musu kolecijos pav.
const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
