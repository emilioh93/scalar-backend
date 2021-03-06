import { Router } from "express";
import moviesCtrl from "../controllers/movies.controllers";

const router = Router();

router.route("/").get(moviesCtrl.listMovies).post(moviesCtrl.newMovie);
router
  .route("/:id")
  .delete(moviesCtrl.deleteMovie)
  .put(moviesCtrl.editMovie)
  .get(moviesCtrl.getTheMovie);

export default router;
