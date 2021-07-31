import React, { Component } from "react";
import styled from "styled-components";

import ProductItem from "components/common/ProductItem";

import WaringModal from "components/WarningModal";
import BrandFilter from "components/productRecent/BrandFilter";
import DisLikeFilter from "components/productRecent/DisLikeFilter";
import CheckboxGroup from "components/productRecent/CheckboxGroup";
import SortBtn from "components/productRecent/SortBtn";
import Button from "components/common/Button";
import { clearProducts, getProducts } from "utils/localStorage";
import Empty from "components/productRecent/Empty";
import moment from "moment";

class ProductRecent extends Component {
  state = {
    // warning: false,
    showSort: false,
    products: [],
    brand: [],
    brandFilter: [],
    showBrandFilter: false,
    showDisLikeFilter: false,
  };

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
    const visitedItem = getProducts();

    this.setState({
      products: visitedItem,
    });

    const myStorageBrand =
      visitedItem.length !== 0 ? new Set(visitedItem.map((item) => item.brand)) : [];

    this.setState((prev) => ({
      ...prev,
      brand: [...myStorageBrand],
      brandFilter: [...myStorageBrand],
    }));
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    const midnight = "00:00:00";
    let nowTime = null;

    nowTime = moment().format("HH:mm:ss");
    if (nowTime === midnight) {
      clearProducts();
      this.setState({
        products: [],
      });
    }
  }

  isShowWarningPopup = (bool) => {
    bool
      ? this.setState((prev) => ({ ...prev, warning: true }))
      : this.setState((prev) => ({ ...prev, warning: false }));
  };

  setBrandFilter = (brandList) => {
    this.setState({
      brandFilter: brandList,
    });
  };

  toggleBrandFilter = () => {
    this.setState((prev) => ({
      ...prev,
      showBrandFilter: !prev.showBrandFilter,
    }));
  };

  toggleDisLikeFilter = () => {
    this.setState((prev) => ({
      ...prev,
      showDisLikeFilter: !prev.showDisLikeFilter,
    }));
  };

  handleSort = (e) => {
    const { id } = e.target;
    const { products } = this.state;
    const sortedState = products.sort((prev, next) =>
      id === "recent"
        ? new Date(next.visitedDate).getTime() - new Date(prev.visitedDate).getTime()
        : Number(prev.price) - Number(next.price)
    );
    console.log(sortedState);

    this.setState((prev) => ({
      ...prev,
      products: sortedState,
    }));

    this.toggleSortOpen();
  };

  toggleSortOpen = () => {
    this.setState(
      (prev) => ({
        ...prev,
        showSort: !prev.showSort,
      }),
      () => console.log(this.state.showSort)
    );
  };

  renderFilteredProducts = () => {
    const { products, brandFilter, showDisLikeFilter, disLike } = this.state;
    return products
      .filter((p) => brandFilter.includes(p.brand) && (showDisLikeFilter ? p.disLike === false : p))
      .map((product, i) => (
        <ProductItem
          key={`prod${i}`}
          product={product}
          disLike={disLike}
          isShowWarningPopup={this.isShowWarningPopup}
        />
      ));
  };

  render() {
    const { warning, showSort, brand, brandFilter, showBrandFilter, showDisLikeFilter } =
      this.state;

    const result = this.renderFilteredProducts();

    return (
      <Wrapper>
        <Menu>
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
        </Menu>
        <ProductsWrapper>
          {!!result.length ? this.renderFilteredProducts() : <Empty />}
        </ProductsWrapper>
        <WaringModal isShow={warning} isShowWarningPopup={this.isShowWarningPopup} />

        <SortContainer>
          <SortBtnWrapper onClick={this.toggleSortOpen}>
            <Button value={"정렬"} />
          </SortBtnWrapper>
          <SortBtn isTransition={showSort} handleSort={this.handleSort} />
        </SortContainer>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  position: relative;
  min-height: 700px;
  margin: 72px 20px 0;

  h3 {
    padding: 10px 6px;
    font-weight: 600;
    font-size: 1.25rem;
  }
`;

const Menu = styled.div`
  position: fixed;
  width: 460px;
  background-color: ${({ theme }) => theme.color.background};

  .filter-btn {
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

const ProductsWrapper = styled.div`
  padding-top: 80px;
`;

const SortContainer = styled.div`
  position: fixed;
  top: 700px;
  left: 50%;
  transform: translateX(-50%);
`;

const SortBtnWrapper = styled.div`
  position: relative;
`;
export default ProductRecent;
