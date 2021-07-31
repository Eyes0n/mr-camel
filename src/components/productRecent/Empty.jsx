import React, { Component } from "react";
import styled from "styled-components";

class Empty extends Component {
  render() {
    return (
      <Center>
        <p>최근 조회하신 상품이 없습니다.</p>
      </Center>
    );
  }
}

export default Empty;

const Center = styled.div`
  ${({ theme }) => theme.flexSet()}
  height: 500px;
`;
