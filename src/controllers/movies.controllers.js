import Movie from "../models/movies.model";

const moviesCtrl = {};

moviesCtrl.newMovie = async (req, res) => {
  try {
    const addNewMovie = new Movie({
      name: req.body.name,
      resume: req.body.resume,
      raiting: req.body.raiting,
      date: req.body.date,
      genre: req.body.genre,
      image: req.body.image,
    });
    await addNewMovie.save();
    res.status(201).json({ msj: "Movie added successfully!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msj: "Error when adding movie" });
  }
};

moviesCtrl.listMovies = async (req, res) => {
  try {
    const arrayMovies = await Movie.find();
    res.status(200).json(arrayMovies);
  } catch (error) {
    res.status(500).json({ msj: "Error when trying to list the movies" });
  }
};

moviesCtrl.deleteMovie = async (req, res) => {
  try {
    console.log(req.params.id);
    await Movie.findByIdAndDelete(req.params.id);
    res.status(200).json({ msj: "The movie was deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msj: "Error when trying to delete the movie" });
  }
};

moviesCtrl.editMovie = async (req, res) => {
  try {
    await Movie.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ msj: "The movie was successfully updated" });
  } catch (error) {
    console.log(error);
    res.status(404).json({ msj: "Error when trying to find the movie" });
  }
};

moviesCtrl.getTheMovie = async (req, res) => {
  try {
    const wantedMovie = await Movie.findById(req.params.id);
    res.status(200).json(wantedMovie);
  } catch (error) {
    console.log("Error!:", error);
    res.status(404).json({ msj: "Error when trying to find the movie" });
  }
};

export default moviesCtrl;
