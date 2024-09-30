import { Router } from "express";
import castService from "../services/castService.js";

const router = Router();

router.get('/createCast', (req, res) => {
    
   res.render('movies/castCreate')
});
router.post('/createCast', (req, res) => {
    const cast = req.body;
   castService.createCast(cast);
   res.redirect('/');
});

export default router;