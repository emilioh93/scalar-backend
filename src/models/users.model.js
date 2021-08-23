import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";

const usersSchema = new Schema({
  firstName: {
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
  confirmPassword: {
    type: String,
    required: true,
    maxLength: 150,
    unique: false,
  },
  role: {
    type: String,
    // required: true,
    maxLength: 150,
    unique: false,
  },
});

usersSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

usersSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", usersSchema);

export default User;
