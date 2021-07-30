import React, { Component } from "react";
import styled, { css } from "styled-components";
import { darken } from "polished";
import history from "../../usehistory";
class ProductItem extends Component {
  render() {
    const {
      product: { title, brand, price, id, disLike, visitedDate },
    } = this.props;
    const handleClick = (disLike) => {
      if (!disLike) return;
      history.push(`/productdetail/${id}/${title}/${brand}/${price}/${visitedDate}`);
    };

    return (
      <Wrapper>
        <div className="item-wrapper" onClick={() => handleClick(disLike)}>
          <h4>{title.length > 25 ? title.substring(0, 25).concat("...") : title}</h4>
          <div>
            <span>{brand}</span>
            <span>{price}원</span>
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
