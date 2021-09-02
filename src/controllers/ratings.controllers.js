import Rating from "../models/ratings.model";

const ratingsCtrl = {};

ratingsCtrl.newRating = async (req, res) => {
  try {
    const addNewRating = new Rating({
      user: req.body.user,
      value: req.body.value,
      movie: req.body.movie,
    });
    await addNewRating.save();
    res.status(201).json({ msj: "Rating added successfully!" });
  } catch (error) {
    res.status(500).json({ msj: "Error when adding rating" });
    console.log(error);
  }
};

ratingsCtrl.listRatings = async (req, res) => {
  try {
    const arrayRatings = await Rating.find();
    res.status(200).json(arrayRatings);
  } catch (error) {
    res.status(500).json({ msj: "Error when trying to list ratings" });
  }
};

ratingsCtrl.deleteRating = async (req, res) => {
  try {
    console.log(req.params.id);
    await Rating.findByIdAndDelete(req.params.id);
    res.status(200).json({ msj: "The rating was deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msj: "Error when trying to delete the rating" });
  }
};

ratingsCtrl.editRating = async (req, res) => {
  try {
    await Rating.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ msj: "The rating was successfully updated" });
  } catch (error) {
    console.log(error);
    res.status(404).json({ msj: "Error when trying to find the rating" });
  }
};

ratingsCtrl.getTheRating = async (req, res) => {
  try {
    const wantedRating = await Rating.findById(req.params.id);
    res.status(200).json(wantedRating);
    console.log({wantedRating});
  } catch (error) {
    console.log("Error!:", error);
    res.status(404).json({ msj: "Error when trying to find the rating" });
  }
};

export default ratingsCtrl;
