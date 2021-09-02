import mongoose, { Schema } from "mongoose";

const ratingSchema = new Schema({
  user: {
    type: mongoose.Types.ObjectId,
  },
  value: {
    type: Number,
  },
  movie: {
    type: mongoose.Types.ObjectId,
  },
});

const Rating = mongoose.model("Rating", ratingSchema);

export default Rating;
