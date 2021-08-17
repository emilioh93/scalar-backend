import mongoose, { Schema } from "mongoose";

const usersSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxLength: 150,
    unique: false,
  },
  lastName: {
    type: String,
    required: true,
    maxLength: 150,
    unique: false,
  },
  email: {
    type: String,
    required: true,
    maxLength: 150,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    maxLength: 150,
    unique: false,
  },
});

const User = mongoose.model("User", usersSchema);

export default User;
