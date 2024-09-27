import { Router } from "express";
import homeController from "../src/controllers/homeController.js";
import movieController from "../src/controllers/movieController.js"

const router = Router()

router.use(homeController);
router.use('/movies', movieController);
router.all('*', (req, res) => {
    res.render('404');
})

export default router