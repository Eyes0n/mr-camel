import React, { Component } from "react";
import styled from "styled-components";

class SortBtn extends Component {
  render() {
    const { handleSort, isTransition } = this.props;

    return (
      <Wrapper isTransition={isTransition} onClick={handleSort}>
        <button id="recent" type="button">
          최신 조회 순
        </button>
        <button id="low" type="button">
          낮은 가격 순
        </button>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  position: absolute;
  left: -123px;
  bottom: ${({ isTransition }) => (isTransition ? "150px" : "60px")};
  width: 300px;
  border: 1px solid ${({ theme }) => theme.color.badge};
  border-radius: 12px;
  background-color: ${({ theme }) => theme.color.white};
  opacity: ${({ isTransition }) => (isTransition ? "1" : "0")};

  transition: 0.5s;

  button {
    display: block;
    width: 100%;
    padding: 10px 0;
    color: ${({ theme }) => theme.color.badge};
  }

  button + button {
    border-top: 1px solid ${({ theme }) => theme.color.badge};
  }
`;

export default SortBtn;
