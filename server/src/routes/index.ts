import express from "express";
import { getAllCats } from '../controllers/cats';


const router = express.Router();

// Cats routes
router.get("/cats/all", getAllCats);

export default router;