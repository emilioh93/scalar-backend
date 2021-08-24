import mongoose, { Schema } from "mongoose";

const commentsSchema = new Schema({
  user: {
    type: mongoose.Types.ObjectId,
  },
  userName: {
    type: String,
  },
  userLast: {
    type: String,
  },
  text: {
    type: String,
  },
  movie: {
    type: mongoose.Types.ObjectId,
  },
});

const Comment = mongoose.model("Comment", commentsSchema);

export default Comment;
