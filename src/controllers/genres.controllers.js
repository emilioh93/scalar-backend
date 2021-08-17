import Genre from "../models/genres.model";

const genresCtrl = {};

genresCtrl.newGenre = async (req, res) => {
  try {
    const addNewGenre = new Genre({
      name: req.body.name,
    });
    await addNewGenre.save();
    res.status(201).json({ msj: "Genre added successfully!" });
  } catch (error) {
    res.status(500).json({ msj: "Error when adding genre" });
  }
};

genresCtrl.listGenres = async (req, res) => {
  try {
    const arrayGenres = await Genre.find();
    res.status(200).json(arrayGenres);
  } catch (error) {
    res.status(500).json({ msj: "Error when trying to list the genres" });
  }
};

genresCtrl.deleteGenre = async (req, res) => {
  try {
    console.log(req.params.id);
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ msj: "The genre was deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msj: "Error when trying to delete the genre" });
  }
};

genresCtrl.editGenre = async (req, res) => {
  try {
    await Genre.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ msj: "The genre was successfully updated" });
  } catch (error) {
    console.log(error);
    res.status(404).json({ msj: "Error when trying to find the genre" });
  }
};

genresCtrl.getTheGenre = async (req, res) => {
  try {
    const wantedGenre = await Genre.findById(req.params.id);
    res.status(200).json(wantedGenre);
  } catch (error) {
    console.log("Error!:", error);
    res.status(404).json({ msj: "Error when trying to find the genre" });
  }
};

export default genresCtrl;
