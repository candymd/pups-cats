import dogData from "../json/dogs.json";

export const getAll = () => {
  return dogData;
};

export const getByName = (name: string) => {
  return dogData.find((dog) => dog.name?.toLowerCase() === name);
};

export const add = ({ name, image }) => {
  dogData.push({ name, image });
};

export const edit = ({ name, newName, image }) => {
  const dog = getByName(name);
  dog.image = image;
  if (newName) {
    dog.name = newName;
  }
};

export const deleteByName = (name: string) => {
  const dogIndex = dogData.findIndex((dog) => dog.name === name);
  dogData.splice(dogIndex, 1);

  return `${name} was deleted successfully`;
};

export const dogsService = {
  getAll,
  getByName,
  add,
  edit,
  deleteByName,
};
