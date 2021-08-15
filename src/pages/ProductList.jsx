import React, { Component } from "react";
import styled from "styled-components";
import ProductItem from "components/common/ProductItem";
import WarningModal from "components/WarningModal";
import { ProductsContext } from "App";

class ProductList extends Component {
  // static contextType = ProductsContext;
  constructor(props, context) {
    super(props);
    this.state = {
      allProducts: context.allProducts,
      warning: false,
    };
  }
  // state = {
  //   warning: false,
  // };

  componentDidMount() {
    console.log("this.state.allProducts", this.state.allProducts);
  }

  isShowWarningPopup = (bool) => {
    bool
      ? this.setState((prev) => ({ ...prev, warning: true }))
      : this.setState((prev) => ({ ...prev, warning: false }));
  };

  render() {
    const { warning } = this.state;

    return (
      <ProductsContext.Consumer>
        {(allProducts) => (
          <Wrapper>
            <h3>이런 매물은 어때요?🤗</h3>
            <div className="product-list">
              {allProducts?.map((product, i) => (
                <ProductItem
                  key={`prod${i}`}
                  product={product}
                  isShowWarningPopup={this.isShowWarningPopup}
                />
              ))}
            </div>
            <WarningModal isShow={warning} isShowWarningPopup={this.isShowWarningPopup} />
          </Wrapper>
        )}
      </ProductsContext.Consumer>
    );
  }
}

// ProductList.contextType = ProductsContext;

export default ProductList;

const Wrapper = styled.div`
  margin: 72px 20px 0;

  h3 {
    position: fixed;
    width: 460px;
    padding: 10px 6px;
    background-color: ${({ theme }) => theme.color.background};
    font-weight: 600;
    font-size: 1.25rem;
  }

  .product-list {
    padding-top: 40px;
  }
`;
