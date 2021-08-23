import User from "../models/users.model";
import generateToken from "../utils/generateToken";

const usersCtrl = {};

usersCtrl.newUser = async (req, res) => {
  const { firstName, lastName, email, password, confirmPassword, role } =
    req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400).json({ msj: "User already exists" });
  }

  const user = await User.create({
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    role,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
      role: user.role,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
};

usersCtrl.listUsers = async (req, res) => {
  try {
    const arrayUsers = await User.find();
    res.status(200).json(arrayUsers);
  } catch (error) {
    res.status(500).json({ msj: "Error when trying to list the users" });
  }
};

usersCtrl.deleteUser = async (req, res) => {
  try {
    console.log(req.params.id);
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ msj: "The user was deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msj: "Error when trying to delete the user" });
  }
};

usersCtrl.editUser = async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ msj: "The user was successfully updated" });
  } catch (error) {
    console.log(error);
    res.status(404).json({ msj: "Error when trying to find the usar" });
  }
};

usersCtrl.getTheUser = async (req, res) => {
  try {
    const wantedUser = await User.findById(req.params.id);
    res.status(200).json(wantedUser);
  } catch (error) {
    console.log("Error!:", error);
    res.status(404).json({ msj: "Error when trying to find the user" });
  }
};

usersCtrl.authUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
      token: generateToken(user._id),
    });
  } else {
    res.status(401).json({ msj: "Invalid email or password" });
  }
};

export default usersCtrl;
