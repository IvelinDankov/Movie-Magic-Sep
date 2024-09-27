import { Router } from "express";
import homeController from "../src/controllers/homeController.js";
import movieController from "../src/controllers/movieController.js"

const router = Router()

router.use(homeController);
router.use('/movies', movieController);

export default router