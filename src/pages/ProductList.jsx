import React, { Component } from "react";
import styled from "styled-components";
import ProductItem from "components/common/ProductItem";
import WarningModal from "components/WarningModal";
import { AllProductsContext } from "context/ProductsContext";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      warning: false,
    };
  }

  isShowWarningPopup = () => {
    this.setState((prev) => ({ warning: !prev.warning }));
  };

  render() {
    const { warning } = this.state;

    return (
      <AllProductsContext.Consumer>
        {(allProducts) => (
          <Wrapper>
            <h3>이런 매물은 어때요?🤗</h3>
            <div className="product-list" data-testid="itemList">
              {allProducts?.map((product, i) => (
                <ProductItem
                  key={`product${i}`}
                  product={product}
                  isShowWarningPopup={this.isShowWarningPopup}
                />
              ))}
            </div>
            <WarningModal isShow={warning} isShowWarningPopup={this.isShowWarningPopup} />
          </Wrapper>
        )}
      </AllProductsContext.Consumer>
    );
  }
}

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
