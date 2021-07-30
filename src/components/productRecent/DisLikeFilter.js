import React, { Component } from "react";
import hide from "assets/svg/hide.svg";
import empty from "assets/svg/empty.svg";

class DisLikeFilter extends Component {
  render() {
    const { show, onClick } = this.props;

    return (
      <button>
        <img src={show ? hide : empty} alt="관심없는 상품 숨기기 버튼" />
        <span onClick={() => onClick()}>관심없는 상품 숨기기</span>
      </button>
    );
  }
}

export default DisLikeFilter;
