import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ProductImage from "components/productDetail/ProductImage";
import Button from "components/common/Button";
import close from "assets/svg/close.svg";
import refresh from "assets/svg/refresh.svg";
import { AllProductsContext } from "context/ProductsContext";

class ProductDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {},
    };
  }

  static contextType = AllProductsContext;

  componentDidMount() {
    const { match } = this.props;
    const allProducts = this.context;

    this.setState({
      product: allProducts[match.params.id],
    });
  }

  //TODO: contextAPI로 전체 상품 데이터 관리되게 함
  //TODO: 관심없음 클릭 시 랜덤 상품 출력 기능 구현
  //TODO: 싫어요 클릭 시 랜덤 상품 출력 기능 구현

  handleDisLikeClick = () => {};

  handleRandomClick = () => {};

  render() {
    const { title, brand, price } = this.state.product;

    return (
      <Wrapper>
        <h3>상품 자세히 보기</h3>
        <ProductImage />
        <div className="product-info">
          <h4>{title}</h4>
          <div>
            <span>{brand}</span>
            <span>{price}</span>
          </div>
        </div>
        <div className="button-group">
          <Button
            svg={close}
            value="관심없음"
            size="large"
            color="blue"
            onClick={() => this.handleDisLikeClick()}
          />
          <Button
            svg={refresh}
            value="랜덤상품 조회"
            size="large"
            onClick={() => this.handleRandomClick()}
          />
        </div>
        <Link to={`/recentlist`}>
          <h5 className="moveto-productlist">오늘 본 상품 리스트 보러가기 👀</h5>
        </Link>
      </Wrapper>
    );
  }
}

// ProductDetail.contextType = AllProductsContext;
export default ProductDetail;

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
