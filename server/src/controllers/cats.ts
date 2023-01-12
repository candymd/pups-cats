import { getAllCatsService } from "../services/cats/getAllCats";
import { Request, Response } from "express";

export const getAllCats = (_request: Request, response: Response) => {
  return response.json(getAllCatsService());
};
