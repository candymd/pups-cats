import catData from "../json/cats.json";
 
export const getAll = () => {
  return catData;
};

export const getByName = (name: string) => {
  return catData.find((cat) => cat.name?.toLowerCase() === name);
};

export const add = ({ name, image }) => {
  catData.push({ name, image });
};

export const edit = ({ name, newName, image }) => {
  const cat = getByName(name);
  cat.image = image;
  if (newName) {
    cat.name = newName;
  }
};

export const deleteByName = (name: string) => {
  const cat = catData.find((cat) => cat.name.toLowerCase() === name);
  const catIndex = catData.indexOf(cat);
  catData.splice(catIndex, 1);
};

export const catsService = {
  getAll,
  getByName,
  add,
  edit,
  deleteByName
}
