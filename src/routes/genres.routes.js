import { Router } from "express";
import genresCtrl from "../controllers/genres.controllers";

const router = Router();

router.route("/").get(genresCtrl.listGenres).post(genresCtrl.newGenre);
router
  .route("/:id")
  .delete(genresCtrl.deleteGenre)
  .put(genresCtrl.editGenre)
  .get(genresCtrl.getTheGenre);

export default router;
