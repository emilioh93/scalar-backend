import mongoose, { Schema } from "mongoose";

const moviesSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxLength: 150,
    unique: true,
  },
  resume: {
    type: String,
    required: true,
    unique: true,
  },
  raiting: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
    unique: true,
  },
});

const Movie = mongoose.model("Movie", moviesSchema);

export default Movie;
