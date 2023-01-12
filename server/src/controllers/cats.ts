import { getAllCatsService, getCatByNameService } from "../services/cats/getAllCats";
import { Request, Response } from "express";

export const getAllCats = (_request: Request, response: Response) => {
  return response.json(getAllCatsService());
};

export const getCatByName = (request: Request, response: Response) => {
  const { name } = request.params;
  return response.json(getCatByNameService(name));
};
