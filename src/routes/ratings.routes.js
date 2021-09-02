import { Router } from "express";
import ratingsCtrl from "../controllers/ratings.controllers";

const router = Router();

router.route("/").get(ratingsCtrl.listRatings).post(ratingsCtrl.newRating);
router
  .route("/:id")
  .delete(ratingsCtrl.deleteRating)
  .put(ratingsCtrl.editRating)
  .get(ratingsCtrl.getTheRating);

export default router;
