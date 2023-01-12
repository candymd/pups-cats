import catData from "../json/cats.json";

export const getAllCatsService = () => {
  return catData;
};

export const getCatByNameService = (name: string) => {
  return catData.find((cat) => cat.name?.toLowerCase() === name);
};
