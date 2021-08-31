import mongoose, { Schema } from "mongoose";

const commentsSchema = new Schema({
  user: {
    type: mongoose.Types.ObjectId,
    unique: true,
  },
  userName: {
    type: String,
  },
  userLast: {
    type: String,
  },
  text: {
    type: String,
    required: true,
    maxLength: 100,
    unique: true,
  },
  movie: {
    type: mongoose.Types.ObjectId,
  },
});

const Comment = mongoose.model("Comment", commentsSchema);

export default Comment;
