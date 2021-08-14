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

export default moviesCtrl;
