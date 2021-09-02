import mongoose, { Rating } from "mongoose";

const ratingSchema = new Schema({
  user: {
    type: mongoose.Types.ObjectId,
  },
  value: {
    type: Numbre,
  },
  movie: {
    type: mongoose.Types.ObjectId,
  },
});

const Rating = mongoose.model("Rating", ratingSchema);

export default Rating;
