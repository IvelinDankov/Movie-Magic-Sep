import { Router } from "express";
import homeController from "../src/controllers/homeController.js";
import movieController from "../src/controllers/movieController.js"
import castController from "../src/controllers/castController.js";

const router = Router()

router.use(homeController);
router.use('/movies', movieController);
router.use('/movies', castController)
router.all('*', (req, res) => {
    res.render('404');
})

export default router