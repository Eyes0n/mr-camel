import React, { Component } from "react";
import styled from "styled-components";
import { getProductJsonData } from "utils/fetchData";

import ProductItem from "components/common/ProductItem";

class ProductList extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const productData = await getProductJsonData();

    const editedProductData = productData.map((item, idx) => {
      item.id = `prod${idx}`;
      item.disLike = true;
      item.visitedDate = "";

      return item;
    });

    this.setState({
      products: editedProductData,
    });
  }

  render() {
    const { products } = this.state;

    return (
      <Wrapper>
        <h3>이런 매물은 어때요?🤗</h3>
        {products?.map((product, i) => (
          <ProductItem key={`prod${i}`} product={product} />
        ))}
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  margin: 0 20px;

  h3 {
    padding: 10px 6px;
    font-weight: 600;
    font-size: 1.25rem;
  }
`;

export default ProductList;
