import React, { Component } from "react";
import styled from "styled-components";

import ProductItem from "components/common/ProductItem";

import BrandFilter from "components/productRecent/BrandFilter";
import DisLikeFilter from "components/productRecent/DisLikeFilter";
import CheckboxGroup from "components/productRecent/CheckboxGroup";
import WaringModal from "components/WaringModal";

class ProductRecent extends Component {
  state = {
    warning: false,
    products: [
      {
        id: "prod1",
        title: "중고 나이키 테아 흰검 245 30000원",
        brand: "나이키",
        price: 30000,
        disLike: true,
        visitedDate: "1",
      },
      {
        id: "prod2",
        title: "거의새것 정품 구찌 보스턴백 토트백",
        brand: "구찌",
        price: 380000,
        disLike: true,
        visitedDate: "2",
      },
      {
        id: "prod3",
        title: "중고 스톤아일랜드 쉐도우와팬 봄니트 95",
        brand: "스톤아일랜드",
        price: 350000,
        disLike: false,
        visitedDate: "3",
      },
      {
        id: "prod4",
        title: "나이키 윈드러너 블랙 L",
        brand: "나이키",
        price: 60000,
        disLike: false,
        visitedDate: "4",
      },
      {
        id: "prod5",
        title: "나이키바람막이",
        brand: "나이키",
        price: 68000,
        disLike: false,
        visitedDate: "5",
      },
      {
        id: "prod6",
        title: "구찌 정품 카드지갑 (급처)",
        brand: "구찌",
        price: 100000,
        disLike: false,
        visitedDate: "6",
      },
      {
        id: "prod7",
        title: "나이키 트레이닝 바람막이",
        brand: "나이키",
        price: 75000,
        disLike: false,
        visitedDate: "7",
      },
      {
        id: "prod8",
        title: "구찌 정품 스니커즈 운동화",
        brand: "구찌",
        price: 120000,
        disLike: false,
        visitedDate: "8",
      },
    ],
    brand: [],
    brandFilter: [],
    showBrandFilter: false,
    showDisLikeFilter: false,
  };

  componentDidMount() {
    //   //* 테스트를 위해 전체 데이터 로컬스토리지에 저장
    //   const productData = await getProductJsonData();
    //   const editedProductData = productData.map((item, idx) => {
    //     item.id = `prod${idx}`;
    //     idx % 2 === 0 ? (item.disLike = true) : (item.disLike = false);
    //     item.visitedDate = "";
    //     return item;
    //   });

    //   this.setState({
    //     products: editedProductData,
    //   });

    //   localStorage.setItem("visitedItem", JSON.stringify(this.state.products));
    //   const visitedItem = JSON.parse(localStorage.getItem("visitedItem"));

    // //* 로컬스토리지에 있는 브랜드 리스트 가져오기
    // const myStorageBrand = new Set(visitedItem.map((item) => item.brand));
    // this.setState({
    //   brand: [...myStorageBrand],
    //   brandFilter: [...myStorageBrand],
    // });

    const { products } = this.state;
    const myStorageBrand = new Set(products.map((item) => item.brand));
    this.setState({
      brand: [...myStorageBrand],
      brandFilter: [...myStorageBrand],
    });
  }

  isShowWarningPopup = (bool) => {
    bool
      ? this.setState((prev) => ({ ...prev, warning: true }))
      : this.setState((prev) => ({ ...prev, warning: false }));
  };

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
    const { products, warning, disLike, brand, brandFilter, showBrandFilter, showDisLikeFilter } =
      this.state;
    return (
      <Wrapper>
        <h3>오늘 본 상품 리스트 👀</h3>
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
            <ProductItem key={`prod${i}`} product={product} disLike={disLike} />
          ))}
        <WaringModal isShow={warning} isShowWarningPopup={this.isShowWarningPopup} />
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
