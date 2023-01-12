import express from "express";
import {
  addCat,
  editCat,
  deleteCat,
  getAllCats,
  getCatByName,
} from "../controllers/cats";
import {
  addDog,
  editDog,
  deleteDog,
  getAllDogs,
  getDogByName,
} from "../controllers/dogs";

const router = express.Router();

// Cats routes
router.get("/cats", getAllCats);
router.get("/cat/:name", getCatByName);
router.post("/cat", addCat);
router.put("/cat/:name", editCat);
router.delete("/cat/:name", deleteCat);

// Dogs routes
router.get("/dogs", getAllDogs);
router.get("/dog/:name", getDogByName);
router.post("/dog", addDog);
router.put("/dog/:name", editDog);
router.delete("/dog/:name", deleteDog);

export default router;
