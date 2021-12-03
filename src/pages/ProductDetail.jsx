import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ProductImage from "components/productDetail/ProductImage";
import Button from "components/common/Button";
import close from "assets/svg/close.svg";
import refresh from "assets/svg/refresh.svg";
import { AllProductsContext, getProducts } from "context/ProductsContext";
import { getVisitedProducts, setVisitedProducts } from "utils/localStorage";

class ProductDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {},
      allProducts: [],
    };
  }

  static contextType = AllProductsContext;

  setVisitedItemToStorage = () => {
    if (!getVisitedProducts()) setVisitedProducts([]);

    const visitedProducts = getVisitedProducts();
    const currentItem = { ...this.state.product, visitedDate: new Date() };
    const isExist = visitedProducts
      .map((product, index) => (product.id === currentItem.id ? index : undefined))
      .filter((el) => (el !== undefined ? `${el}` : null));

    if (isExist.length > 0) visitedProducts.splice(isExist[0], 1);
    const newData = visitedProducts.concat(currentItem);
    setVisitedProducts(newData);
  };

  componentDidMount() {
    const { match } = this.props;
    const allProducts = this.context;

    if (allProducts.length) {
      this.setState(
        {
          product: allProducts[match.params.id],
          allProducts,
        },
        () => this.setVisitedItemToStorage()
      );
    } else {
      getProducts().then((allProducts) =>
        this.setState(
          {
            product: allProducts[match.params.id],
            allProducts,
          },
          () => this.setVisitedItemToStorage()
        )
      );
    }
  }

  handleDisLikeClick = () => {
    const products = getVisitedProducts();
    const currentData = products[products.length - 1];
    currentData.disLike = true;
    products.splice(products.length - 1, 1, currentData);
    setVisitedProducts(products);

    this.handleRandomClick();
  };

  handleRandomClick = () => {
    const { product, allProducts } = this.state;
    // const allProducts = this.context;
    const randomNum = Math.floor(Math.random() * (allProducts.length - 1));
    const { disLike } = allProducts[randomNum];

    if (randomNum === product.id || disLike) {
      this.handleRandomClick();
    }

    const item = allProducts[randomNum];
    if (item?.title === undefined) {
      console.log("id", item.id);
    }
    this.setState(
      (prev) => ({
        ...prev,
        product: allProducts[randomNum],
      }),
      () => this.setVisitedItemToStorage()
    );

    this.props.history.push({
      pathname: `/productdetail/${randomNum}`,
    });
  };

  render() {
    const { product } = this.state;
    return (
      <Wrapper>
        <h3>상품 자세히 보기</h3>
        <ProductImage />
        <div className="product-info">
          <h4>{product?.title}</h4>
          <div>
            <span>{product?.brand}</span>
            <span>{product?.price}</span>
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
