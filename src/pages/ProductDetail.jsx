import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ProductImage from "components/productDetail/ProductImage";
import Button from "components/common/Button";
import close from "assets/svg/close.svg";
import refresh from "assets/svg/refresh.svg";
import { getProducts, setProducts } from "utils/localStorage";
class ProductDetail extends Component {
  product = window.location.pathname.split("/");
  state = {
    product: [
      {
        id: decodeURI(this.product[2]),
        title: decodeURI(this.product[3]),
        brand: decodeURI(this.product[4]),
        price: this.product[5],
        disLike: Boolean(+this.product[6]),
        visitedDate: new Date(),
      },
    ],
  };

  componentDidMount() {
    const products = getProducts();
    const currentId = this.state.product[0].id;
    const isExist = products
      .map((product, index) => {
        if (product.id === currentId) return index;
      })
      .filter((el) => {
        if (el !== undefined) return "" + el; //0과 undefined 주의
      });
    if (isExist.length > 0) products.splice(isExist[0], 1); //기존데이터 삭제
    const newData = products.concat(currentId);
    setProducts(newData);
  }

  render() {
    const { title, brand, price } = this.state.product[0];
    const handleDisLikeClick = () => {
      const products = getProducts();
      const currentData = products[products.length - 1];
      currentData.disLike = true;
      products.splice(products.length - 1, 1, currentData);
      setProducts(products);
    };
    const handleRandomClick = () => {};
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
            handleClick={handleDisLikeClick}
          />
          <Button
            svg={refresh}
            value="랜덤상품 조회"
            size="large"
            handleClick={() => handleRandomClick()}
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
