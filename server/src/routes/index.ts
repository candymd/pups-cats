import express from "express";
import { getAllCats, getCatByName } from '../controllers/cats';
import { getAllDogs, getDogByName } from "../controllers/dogs";


const router = express.Router();

// Cats routes
router.get("/cats/all", getAllCats);
router.get("/cat/:name", getCatByName);

// Dogs routes
router.get("/dogs/all", getAllDogs);
router.get("/dog/:name", getDogByName);

export default router;