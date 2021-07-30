import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { darken } from "polished";

class ProductItem extends Component {
  render() {
    const { title, brand, price } = this.props;

    return (
      <Wrapper>
        <Link to="/productdetail">
          <div className="item-wrapper">
            <h4>{title.length > 25 ? title.substring(0, 25).concat("...") : title}</h4>
            <div>
              <span>{brand}</span>
              <span>{price}원</span>
            </div>
          </div>
        </Link>
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
