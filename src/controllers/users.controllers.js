import User from "../models/users.model";

const usersCtrl = {};

usersCtrl.newUser = async (req, res) => {
  try {
    const addNewUser = new User({
      name: req.body.name,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
    });
    await addNewUser.save();
    res.status(201).json({ msj: "User added successfully!" });
  } catch (error) {
    res.status(500).json({ msj: "Error when adding user" });
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

export default usersCtrl;
