import { Router } from "express";
import movieService from "../services/movieService.js";

const router = Router();

router.get("/create", (req, res) => {
  res.render("movies/create");
});

router.post("/create", async (req, res) => {
  const movieData = req.body;

  //TODO: send moviedata...
  await movieService.create(movieData);

  res.redirect("/");
});

router.get('/:movieId/details', async(req, res) => {
    const movie = await movieService.getOne(req.params.movieId);
    // Prepere view data
    movie.rating = getRatingViewData(movie.rating);

   res.render('movies/details', {movie});
});

function getRatingViewData(rating) {
    if (!Number(rating)) {
        return
    }
    return  "&#x2605;".repeat(rating);
}

export default router;
