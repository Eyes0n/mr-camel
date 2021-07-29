import React, { Component } from "react";
import styled from "styled-components";

class Header extends Component {
  render() {
    return <Wrapper>Mr.Camel</Wrapper>;
  }
}

const Wrapper = styled.div`
  height: 40px;
  padding: 12px;

  background-color: ${({ theme }) => theme.color.background};
  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 12px;
`;
export default Header;
