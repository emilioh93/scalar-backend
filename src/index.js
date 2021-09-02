import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import "./database";
import moviesRoutes from "./routes/movies.routes";
import userRoutes from "./routes/users.routes";
import genresRoutes from "./routes/genres.routes";
import commentsRoutes from "./routes/comments.routes";

/* -------------------------------- Instance -------------------------------- */
const app = express();

/* ---------------------------------- Port ---------------------------------- */
app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
  console.log("I'm using port: " + app.get("port"));
  console.log(path.join(__dirname, "../public"));
});
/* ------------------------------- Middlewares ------------------------------ */
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));

/* --------------------------------- Routes --------------------------------- */
app.use("/api/movies", moviesRoutes);
app.use("/api/users", userRoutes);
app.use("/api/genres", genresRoutes);
app.use("/api/comments", commentsRoutes);
app.use("/api/ratings", commentsRoutes);
