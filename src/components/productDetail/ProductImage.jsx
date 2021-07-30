import React, { Component } from "react";
import styled from "styled-components";

import DummyImg from "assets/img/dummyImg.jpg";

class ProductImage extends Component {
  render() {
    return (
      <Wrapper>
        <img src={DummyImg} alt="참고 이미지" />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  img {
    width: 100%;
  }
`;

export default ProductImage;
