import dogData from "../json/dogs.json";

export const getAllDogsService = () => {
  return dogData;
};

export const getDogByNameService = (name: string) => {
  return dogData.find((dog) => dog.name?.toLowerCase() === name);
};
