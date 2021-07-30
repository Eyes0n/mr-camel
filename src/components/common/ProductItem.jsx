import React, { Component } from "react";
import styled, { css } from "styled-components";
import { darken } from "polished";
import Button from "./Button";

class ProductItem extends Component {
  render() {
    const {
      product: { title, brand, price, disLike },
      isShowWarningPopup,
    } = this.props;

    return (
      <Wrapper onClick={disLike ? () => isShowWarningPopup(true) : null}>
        <div className="item-wrapper">
          <div className="item-title">
            <h4>{title.length > 25 ? title.substring(0, 25).concat("...") : title}</h4>
            {disLike && <Button value={"관심 없음"} size="small" color={"blue"} />}
          </div>
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

    .item-title {
      display: flex;

      h4 {
        font-weight: 600;
        margin-bottom: 6px;
      }
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
