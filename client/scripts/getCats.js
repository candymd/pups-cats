const getAllCats = async () => {
  const response = await fetch("http://localhost:3000/api/cats/all", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw new Error("Could not get cats from server 😿");
  }
};
