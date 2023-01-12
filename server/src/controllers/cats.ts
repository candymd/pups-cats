import { catsService } from "../services/cats";
import { Request, Response } from "express";

const { getAll, getByName, add, edit, deleteByName } = catsService;

export const getAllCats = (_request: Request, response: Response) => {
  return response.json(getAll());
};

export const getCatByName = (request: Request, response: Response) => {
  const { name } = request.params;
  return response.json(getByName(name));
};

export const addCat = (request: Request, response: Response) => {
  const { name, image } = request.body;

  if (!name || !image) {
    return response
      .status(400)
      .json({ message: "Please provide a name and image" });
  }

  add({ name, image });
  return response.json({ message: `${name} was added successfully` });
};

export const editCat = (request: Request, response: Response) => {
  const { name } = request.params;
  const { name: newName, image } = request.body;

  if (!name || !image) {
    return response
      .status(400)
      .json({ message: "Please provide a name and image" });
  }

  const cat = getByName(name);
  const catDoesNotExist = !cat;

  if (catDoesNotExist) {
    return response.status(404).json({ message: `${name} not found 😿` });
  }

  edit({ name, newName, image });

  if (newName) {
    return response.json({ message: `${name} is now ${newName}` });
  }

  return response.json({ message: `${name} was updated successfully` });
};

export const deleteCat = (request: Request, response: Response) => {
  const { name } = request.params;

  const cat = getByName(name);
  const catDoesNotExist = !cat;

  if (catDoesNotExist) {
    return response.status(404).json({ message: `${name} not found 😿` });
  }

  deleteByName(name);
  return response.json({ message: `${name} was deleted successfully` });
};
