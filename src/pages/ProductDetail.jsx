import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import ProductImage from "components/productDetail/ProductImage";
import Button from "components/common/Button";
import close from "assets/svg/close.svg";
import refresh from "assets/svg/refresh.svg";
import history from "../usehistory";

class ProductDetail extends Component {
  state = {
    product: {},
    allProducts: this.props.location.state.allProducts,
  };

  componentDidMount() {
    localStorage.setItem("visitedItem", JSON.stringify(this.state));
    const path = window.location.pathname.split("/");

    const productData = {
      title: decodeURI(path[3]),
      brand: decodeURI(path[4]),
      price: path[5],
      disLike: path[6],
      visitedDate: new Date(),
    };

    const product = JSON.parse(localStorage.getItem("visitedItem"));

    this.setState({
      product: productData,
    });

    // debugger;
    // const newData = product.concat(productData);
    // localStorage.setItem("visitedItem", JSON.stringify(newData));
  }

  componentDidUpdate() {}

  handleRandomClick = () => {
    const path = window.location.pathname.split("/");

    let idx = Math.floor(Math.random() * (this.state.allProducts.length - 1));

    history.push({
      pathname: `/productdetail/prod${idx}/${this.state.allProducts[idx].title}/${this.state.allProducts[idx].brand}/${this.state.allProducts[idx].price}/${this.state.allProducts[idx].disLike}/${this.state.allProducts[idx].visitedDate}`,
      state: { allProducts: this.state.allProducts },
    });

    const productData = {
      title: decodeURI(path[3]),
      brand: decodeURI(path[4]),
      price: path[5],
      disLike: path[6],
      visitedDate: new Date(),
    };

    this.setState({
      product: productData,
    });
  };

  render() {
    const { title, brand, price } = this.state.product;
    const handleDisLikeClick = () => {
      // const product = localStorage.getItem("visitedItem");
      // localStorage.setItem("visitedItem", JSON.stringify(this.state));
    };

    const { lists } = this.props;

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
            onClick={() => handleDisLikeClick()}
          />
          <Button
            svg={refresh}
            value="랜덤상품 조회"
            size="large"
            onClick={this.handleRandomClick}
          />
        </div>
        <Link to={`/recentlist`}>
          <h5 className="moveto-productlist">오늘 본 상품 리스트 보러가기👀</h5>
        </Link>
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
