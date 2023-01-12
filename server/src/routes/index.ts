import express from "express";
import { getAllCats, getCatByName } from '../controllers/cats';


const router = express.Router();

// Cats routes
router.get("/cats/all", getAllCats);
router.get("/cat/:name", getCatByName);

export default router;