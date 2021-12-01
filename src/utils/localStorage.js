export const getVisitedProducts = () => JSON.parse(localStorage.getItem("visitedItem"));

export const setVisitedProducts = (newValue) =>
  localStorage.setItem("visitedItem", JSON.stringify(newValue));

export const clearVisitedProducts = () => localStorage.clear("visitedItem");
