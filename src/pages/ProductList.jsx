import React, { Component } from "react";
import styled from "styled-components";
import { getProductJsonData } from "utils/getProductJsonData";
import ProductItem from "components/common/ProductItem";
import WarningModal from "components/WarningModal";
import { getProducts, setProducts } from "utils/localStorage";

class ProductList extends Component {
  state = {
    warning: false,
    allProducts: [],
  };

  async componentDidMount() {
    if (!getProducts()) setProducts([]);

    const productData = await getProductJsonData();
    const editedProductData = productData.map((item, idx) => {
      item.id = `prod${idx}`;
      item.disLike = 0;
      item.visitedDate = "";
      return item;
    });

    this.setState({
      allProducts: editedProductData,
    });
  }

  isShowWarningPopup = (bool) => {
    bool
      ? this.setState((prev) => ({ ...prev, warning: true }))
      : this.setState((prev) => ({ ...prev, warning: false }));
  };

  render() {
    const { allProducts, warning } = this.state;

    return (
      <Wrapper>
        <h3>이런 매물은 어때요?🤗</h3>
        <div className="product-list">
          {allProducts?.map((product, i) => (
            <ProductItem
              key={`prod${i}`}
              {...{ product, allProducts }}
              isShowWarningPopup={this.isShowWarningPopup}
            />
          ))}
        </div>
        <WarningModal isShow={warning} isShowWarningPopup={this.isShowWarningPopup} />
      </Wrapper>
    );
  }
}

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

export default ProductList;
