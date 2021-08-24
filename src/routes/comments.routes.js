import { Router } from "express";
import commentsCtrl from "../controllers/comments.controllers";

const router = Router();

router.route("/").get(commentsCtrl.listComments).post(commentsCtrl.newComment);
router
  .route("/:id")
  .delete(commentsCtrl.deleteComment)
  .put(commentsCtrl.editComment)
  .get(commentsCtrl.getTheComment);

export default router;
