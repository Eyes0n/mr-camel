export const getProductJsonData = async () => {
  const response = await fetch("http://localhost:3000/data/data.json");
  const data = await response.json();
  return data;
};
