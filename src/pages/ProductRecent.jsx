import React, { Component } from "react";
import styled from "styled-components";

import { getProductJsonData } from "utils/fetchData";
import ProductItem from "components/common/ProductItem";

import BrandFilter from "components/productRecent/BrandFilter";
import DisLikeFilter from "components/productRecent/DisLikeFilter";
import CheckboxGroup from "components/productRecent/CheckboxGroup";

class ProductRecent extends Component {
  state = {
    products: [],
    brand: [],
    brandFilter: [],
    showBrandFilter: false,
    showDisLikeFilter: false,
  };

  async componentDidMount() {
    //* 테스트를 위해 전체 데이터 로컬스토리지에 저장
    const productData = await getProductJsonData();
    const editedProductData = productData.map((item, idx) => {
      item.id = `prod${idx}`;
      idx % 2 === 0 ? (item.disLike = true) : (item.disLike = false);
      item.visitedDate = "";
      return item;
    });

    this.setState({
      products: editedProductData,
    });

    localStorage.setItem("visitedItem", JSON.stringify(this.state.products));
    const visitedItem = JSON.parse(localStorage.getItem("visitedItem"));

    //* 로컬스토리지에 있는 브랜드 리스트 가져오기
    const myStorageBrand = new Set(visitedItem.map((item) => item.brand));
    this.setState({
      brand: [...myStorageBrand],
      brandFilter: [...myStorageBrand],
    });
  }

  //* 필더에 적용될 브랜드 리스트 셋팅
  setBrandFilter = (brandList) => {
    this.setState({
      brandFilter: brandList,
    });
  };

  //* 브랜드 필터를 화면에 보일지/숨길지 토글 설정
  toggleBrandFilter = () => {
    this.setState((prev) => ({
      ...prev,
      showBrandFilter: !prev.showBrandFilter,
    }));
  };

  //* 관심없는 상품 숨기기 토글 설정
  toggleDisLikeFilter = () => {
    this.setState((prev) => ({
      ...prev,
      showDisLikeFilter: !prev.showDisLikeFilter,
    }));
  };

  render() {
    const { products, brand, brandFilter, showBrandFilter, showDisLikeFilter } = this.state;
    return (
      <Wrapper>
        <h3>오늘 본 상품 리스트👀</h3>
        <div className="filter-btn">
          <BrandFilter onClick={this.toggleBrandFilter} />
          <DisLikeFilter show={showDisLikeFilter} onClick={this.toggleDisLikeFilter} />
        </div>
        <CheckboxGroup
          show={showBrandFilter}
          brand={brand}
          filter={brandFilter}
          onChange={this.setBrandFilter}
        />

        {products
          .filter(
            (p) => brandFilter.includes(p.brand) && (showDisLikeFilter ? p.disLike === false : p)
          )
          .map((product, i) => (
            <ProductItem key={`prod${i}`} product={product} />
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
