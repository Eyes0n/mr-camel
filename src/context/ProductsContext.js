import React, { useEffect, useState } from "react";
import { getProductJsonData } from "utils/getProductJsonData";

export const AllProductsContext = React.createContext([]);

export const getProducts = async () => {
  const productJson = await getProductJsonData();

  const editedProductData = productJson.map((item, idx) => {
    item.id = idx;
    item.disLike = 0;
    item.visitedDate = "";
    return item;
  });

  return editedProductData;
};

const ProductsContext = ({ children }) => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    getProducts().then((products) => {
      setAllProducts(products);
    });
    getProducts();
  }, []);

  return <AllProductsContext.Provider value={allProducts}>{children}</AllProductsContext.Provider>;
};

export default ProductsContext;
