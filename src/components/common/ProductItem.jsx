import React, { Component } from "react";
import styled, { css } from "styled-components";
import { darken } from "polished";
import history from "../../usehistory";

class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.product = this.props.product;
    this.allProducts = this.props.allProducts;
    this.title = this.product.title;
    this.brand = this.product.brand;
    this.price = this.product.price;
    this.id = this.product.id;
    this.disLike = this.product.disLike;
  }

  handleItemClick = () => {
    if (this.disLike) return alert("관심없는 상품이에요");
    history.push({
      pathname: `/productdetail/${this.id}/${this.title}/${this.brand}/${this.price}/${this.disLike}`,
      state: { allProducts: this.allProducts },
    });
  };
  render() {
    return (
      <Wrapper>
        <div className="item-wrapper" onClick={() => this.handleItemClick(this.disLike)}>
          <h4>{this.title.length > 25 ? this.title.substring(0, 25).concat("...") : this.title}</h4>
          <div>
            <span>{this.brand}</span>
            <span>{this.price}원</span>
          </div>
        </div>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 12px;

  .item-wrapper {
    padding: 6px 12px;
    margin-bottom: 6px;
    color: ${({ theme }) => theme.color.font};

    h4 {
      font-weight: 600;
      margin-bottom: 6px;
    }

    div {
      display: flex;
      justify-content: space-between;
    }
  }

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    ${({ theme }) =>
      css`
        &:hover {
          background: ${darken(0.1, theme.color.background)};
        }
      `}
  }
`;

export default ProductItem;
