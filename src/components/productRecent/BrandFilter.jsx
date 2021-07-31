import React, { Component } from "react";
import selector from "assets/svg/selector.svg";

class BrandFilter extends Component {
  render() {
    return (
      <button onClick={() => this.props.onClick()}>
        <img src={selector} alt="브랜드 선택하기 버튼" />
        <span>브랜드 선택하기</span>
      </button>
    );
  }
}

export default BrandFilter;
