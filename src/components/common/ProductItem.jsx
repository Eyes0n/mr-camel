import React, { Component } from "react";
import styled, { css } from "styled-components";
import { darken } from "polished";
import Button from "./Button";
import history from "../../usehistory";
import WarningModal from "components/WarningModal";

class ProductItem extends Component {
  handleItemClick = () => {
    const {
      isShowWarningPopup,
      allProducts,
      product: { disLike, id, title, brand, price },
    } = this.props;

    if (disLike) {
      isShowWarningPopup(true);
      return;
    }

    history.push({
      pathname: `/productdetail/${id}/${title}/${brand}/${price}/${disLike}`,
      state: { allProducts: allProducts },
    });
  };

  render() {
    const {
      product: { title, brand, price, disLike },
    } = this.props;

    return (
      <Wrapper>
        <div className="item-wrapper" onClick={() => this.handleItemClick(disLike)}>
          <div className="item-title">
            <h4>{title.length > 25 ? title.substring(0, 25).concat("...") : title}</h4>
            {!!disLike && <Button value={"관심 없음"} size="small" color={"blue"} />}
          </div>
          <div>
            <ItemPrice>
              <span>{brand}</span>
              <span>{price}원</span>
            </ItemPrice>
          </div>
        </div>
        <WarningModal />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 12px;
  z-index: 1;
  cursor: pointer;

  .item-wrapper {
    padding: 12px 12px;
    margin-bottom: 12px;
    color: ${({ theme }) => theme.color.font};

    .item-title {
      display: flex;
      justify-content: space-between;

      h4 {
        font-weight: 600;
        margin-bottom: 15px;
      }
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

const ItemPrice = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default ProductItem;
