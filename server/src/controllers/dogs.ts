import { getAllDogsService, getDogByNameService } from "../services/dogs/index";
import { Request, Response } from "express";

export const getAllDogs = (_request: Request, response: Response) => {
  return response.json(getAllDogsService());
};

export const getDogByName = (request: Request, response: Response) => {
  const { name } = request.params;
  return response.json(getDogByNameService(name));
};
