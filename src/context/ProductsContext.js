import React, { Component } from "react";
import { getProductJsonData } from "utils/getProductJsonData";

export const AllProductsContext = React.createContext([]);

class ProductsContext extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allProducts: [],
    };
  }

  componentDidMount() {
    const getProducts = async () => {
      const productJson = await getProductJsonData();

      const editedProductData = productJson.map((item, idx) => {
        item.id = idx;
        item.disLike = 0;
        item.visitedDate = "";
        return item;
      });

      this.setState({
        allProducts: editedProductData,
      });
    };

    getProducts();
  }
  render() {
    const { allProducts } = this.state;
    return (
      <AllProductsContext.Provider value={allProducts}>
        {this.props.children}
      </AllProductsContext.Provider>
    );
  }
}

export default ProductsContext;
