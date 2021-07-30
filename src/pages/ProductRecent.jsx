import React, { Component } from "react";
import styled from "styled-components";

import { getProductJsonData } from "utils/fetchData";
import ProductItem from "components/common/ProductItem";

import selector from "assets/svg/selector.svg";
import hide from "assets/svg/hide.svg";

class ProductRecent extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const data = await getProductJsonData();

    this.setState({
      products: data,
    });
  }
  render() {
    const { products } = this.state;
    return (
      <Wrapper>
        <h3>오늘 본 상품 리스트👀</h3>
        <div className="filter-btn">
          {/* 컴포넌트 분리 작업 필요 */}
          <button>
            <img src={selector} alt="브랜드 선택하기 버튼" />
            <span>브랜드 선택하기</span>
          </button>
          <button>
            <img src={hide} alt="관심없는 상품 숨기기 버튼" />
            <span>관심없는 상품 숨기기</span>
          </button>
        </div>
        {products?.map((product, i) => (
          <ProductItem key={`prod${i}`} {...product} />
        ))}
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  margin: 0 20px;

  h3 {
    padding: 10px 6px;
    font-weight: 600;
    font-size: 1.25rem;
  }

  > .filter-btn {
    display: flex;
    justify-content: space-between;
    margin-bottom: 6px;

    button {
      font-size: 1rem;
      img {
        width: 15px;
        margin-right: 6px;
      }
    }
  }
`;

export default ProductRecent;
