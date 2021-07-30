import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

class Header extends Component {
  render() {
    return (
      <Wrapper>
        <Link to="/">
          <h1>Mr.Camel</h1>
        </Link>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  padding: 12px;
  box-shadow: rgba(0, 0, 0, 0.08) 0 4px 2px -2px;

  h1 {
    font-weight: 600;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.color.font};
  }
`;
export default Header;
