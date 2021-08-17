import mongoose, { Schema } from "mongoose";

const genresSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxLength: 150,
    unique: true,
  },
});

const Genre = mongoose.model("Genre", genresSchema);

export default Genre;
