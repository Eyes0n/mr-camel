import ProductImage from "components/productDetail/ProductImage";
import React, { Component } from "react";
import styled from "styled-components";

import Button from "components/common/Button";
import close from "assets/svg/close.svg";
import refresh from "assets/svg/refresh.svg";

class ProductDetail extends Component {
  render() {
    return (
      <Wrapper>
        <h3>상품 자세히 보기</h3>
        <ProductImage />
        {/* title, brand, price props로 가져오는 작업 필요, 우선 더미로 스타일링만 작업했음 */}
        <div className="product-info">
          <h4>상품 title</h4>
          <div>
            <span>상품 brand</span>
            <span>상품 price</span>
          </div>
        </div>
        <div className="button-group">
          <Button svg={close} value="관심없음" size="large" color="blue" />
          <Button svg={refresh} value="랜덤상품 조회" size="large" />
        </div>
        <h5 className="moveto-productlist">오늘 본 상품 리스트 보러가기👀</h5>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  h3 {
    padding: 10px 6px;
    font-weight: 600;
    font-size: 1.25rem;
  }
  .product-info {
    padding: 12px 12px 0 12px;

    h4 {
      font-weight: 600;
      margin-bottom: 6px;
      font-size: 1.25rem;
    }

    div {
      display: flex;
      justify-content: space-between;
    }
    &:after {
      content: "";
      display: block;
      width: 100%;
      height: 1px;
      margin: 12px 0;
      border-top: 1px solid ${({ theme }) => theme.color.borderline};
    }
  }

  .button-group {
    display: flex;
    justify-content: center;
    align-items: center;

    Button + Button {
      margin-left: 12px;
    }
  }

  .moveto-productlist {
    padding: 0 12px 12px 12px;
    text-align: center;

    &:before {
      content: "";
      display: block;
      width: 100%;
      height: 1px;
      margin: 12px 0;
      border-top: 1px solid ${({ theme }) => theme.color.borderline};
    }
  }
`;

export default ProductDetail;
