import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ProductImage from "components/productDetail/ProductImage";
import Button from "components/common/Button";
import close from "assets/svg/close.svg";
import refresh from "assets/svg/refresh.svg";
import { ProductsContext } from "App";

class ProductDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {
        brand: "",
        title: "",
        price: "",
      },
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const { allProducts } = this.context;

    console.log("allProducts", allProducts);
    console.log(`match`, match);
    const nextProduct = allProducts.filter((product) => product.id === match.params.id);
    this.setState({
      product: nextProduct,
    });
  }

  // 제가 하고 싶은거 전역 관리로 전체 상품 데이터 공유하고
  // url :  /:id 로 만들어준 다음
  // id에 따라 기능 동작하게 수정하고 픔

  handleDisLikeClick = (allProducts) => {};

  handleRandomClick = (allProducts) => {};

  render() {
    const { title, brand, price } = this.state.product;
    const { match, allProducts } = this.props;
    console.log("this.context.allProducts", this.context.allProducts);
    console.log(`this.props.match.params`, match.params);

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
            onClick={() => this.handleDisLikeClick(allProducts)}
          />
          <Button
            svg={refresh}
            value="랜덤상품 조회"
            size="large"
            onClick={() => this.handleRandomClick(allProducts)}
          />
        </div>
        <Link to={`/recentlist`}>
          <h5 className="moveto-productlist">오늘 본 상품 리스트 보러가기 👀</h5>
        </Link>
      </Wrapper>
    );
  }
}

// ProductDetail.contextType = ProductsContext;

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
