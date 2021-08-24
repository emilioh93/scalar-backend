import Comment from "../models/comments.model";

const commentsCtrl = {};

commentsCtrl.newComment = async (req, res) => {
  try {
    const addNewComment = new Comment({
      user: req.body.user,
      userName: req.body.user.firstName,
      userLast: req.body.user.lastName,
      text: req.body.text,
      movie: req.body.movie,
    });
    await addNewComment.save();
    res.status(201).json({ msj: "Comment added successfully!" });
  } catch (error) {
    res.status(500).json({ msj: "Error when adding comment" });
    console.log(error);
  }
};

commentsCtrl.listComments = async (req, res) => {
  try {
    const arrayComments = await Comment.find();
    res.status(200).json(arrayComments);
  } catch (error) {
    res.status(500).json({ msj: "Error when trying to list the comments" });
  }
};

commentsCtrl.deleteComment = async (req, res) => {
  try {
    console.log(req.params.id);
    await Comment.findByIdAndDelete(req.params.id);
    res.status(200).json({ msj: "The comment was deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msj: "Error when trying to delete the comment" });
  }
};

commentsCtrl.editComment = async (req, res) => {
  try {
    await Comment.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ msj: "The comment was successfully updated" });
  } catch (error) {
    console.log(error);
    res.status(404).json({ msj: "Error when trying to find the comment" });
  }
};

commentsCtrl.getTheComment = async (req, res) => {
  try {
    const wantedComment = await Comment.findById(req.params.id);
    res.status(200).json(wantedComment);
    console.log({wantedComment});
  } catch (error) {
    console.log("Error!:", error);
    res.status(404).json({ msj: "Error when trying to find the comment" });
  }
};

export default commentsCtrl;
