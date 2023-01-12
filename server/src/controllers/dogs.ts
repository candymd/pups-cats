import { dogsService } from "../services/dogs/index";
import { Request, Response } from "express";

const { getAll, getByName, add, edit, deleteByName } = dogsService;

export const getAllDogs = (_request: Request, response: Response) => {
  return response.json(getAll());
};

export const getDogByName = (request: Request, response: Response) => {
  const { name } = request.params;
  return response.json(getByName(name));
};

export const addDog = (request: Request, response: Response) => {
  const { name, image } = request.body;

  if (!name || !image) {
    return response
      .status(400)
      .json({ message: "Please provide a name and image" });
  }

  add({ name, image });
  return response.json({ message: `${name} was added successfully` });
};

export const editDog = (request: Request, response: Response) => {
  const { name } = request.params;
  const { name: newName, image } = request.body;

  if (!name || !image) {
    return response
      .status(400)
      .json({ message: "Please provide a name and image" });
  }

  const dog = getByName(name);
  const dogDoesNotExist = !dog;

  if (dogDoesNotExist) {
    return response.status(404).json({ message: `${name} not found 🐾` });
  }

  edit({ name, newName, image });

  if (newName) {
    return response.json({ message: `${name} is now ${newName}` });
  }

  return response.json({ message: `${name} was updated successfully` });
};

export const deleteDog = (request: Request, response: Response) => {
  const { name } = request.params;

  const dog = getByName(name);
  const dogDoesNotExist = !dog;

  if (dogDoesNotExist) {
    return response.status(404).json({ message: `${name} not found 🐾` });
  }

  deleteByName(name);

  return response.json({ message: `${name} was deleted successfully` });
};
