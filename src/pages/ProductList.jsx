import React, { Component } from "react";
import styled from "styled-components";
import { getJsonData } from "utils/fetchData";

import ProductItem from "components/common/ProductItem";

class ProductList extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const data = await getJsonData();
    this.setState({
      products: data,
    });
  }
  render() {
    const { products } = this.state;
    return (
      <Wrapper>
        <h3>이런 매물은 어때요?🤗</h3>
        {products?.map((product, i) => (
          <ProductItem key={`prod${i}`} {...product} />
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
