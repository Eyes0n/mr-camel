import React, { Component } from "react";
import styled from "styled-components";

class SortBtn extends Component {
  render() {
    const { handleSort } = this.props;

    return (
      <Wrapper onClick={handleSort}>
        <button id={"recent"} type="button">
          최신 조회 순
        </button>
        <button id={"low"} type="button">
          낮은 가격 순
        </button>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  width: 100%;
  position: absolute;
  bottom: 60px;
  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.badge};
  border-radius: 12px;

  button {
    width: 100%;
    display: block;
    padding: 10px 0;
    color: ${({ theme }) => theme.color.badge};
  }

  button + button {
    border-top: 1px solid ${({ theme }) => theme.color.badge};
  }
`;

export default SortBtn;
