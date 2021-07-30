export const getProducts = () => JSON.parse(localStorage.getItem("visitedItem"));
export const setProducts = (newValue) =>
  localStorage.setItem("visitedItem", JSON.stringify(newValue));
