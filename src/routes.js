import { Router } from "express";
import homeController from "../src/controllers/homeController.js";

const router = Router()

router.use(homeController);

export default router