import { Router } from "express";
import moviesCtrl from "../controllers/movies.controllers";

const router = Router();

router.route("/").get(moviesCtrl.listMovies).post(moviesCtrl.newMovie);

export default router;
