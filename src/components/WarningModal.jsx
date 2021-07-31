import React, { Component } from "react";
import styled from "styled-components";

class WarningModal extends Component {
  render() {
    const { isShow, isShowWarningPopup } = this.props;

    return (
      <Overlay isShow={isShow} onClick={() => isShowWarningPopup(false)}>
        <TextWrapper>
          <span>관심 없는 상품이므로 상세 페이지로 이동할 수 없습니다.</span>
        </TextWrapper>
      </Overlay>
    );
  }
}

const Overlay = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 500px;
  height: 800px;
  margin: 10px auto;
  background-color: rgba(0, 0, 0, 0.4);
  visibility: ${({ isShow }) => (isShow ? "visible" : "hidden")};
  opacity: ${({ isShow }) => (isShow ? "1" : "0")};
  transition: 0.5s;
  z-index: 1;
`;

const TextWrapper = styled.div`
  ${({ theme }) => theme.flexSet("center", "center")}
  flex: 1;
  background-color: red;

  span {
    padding: 20px;
    color: white;
    text-align: "center";
  }
`;

export default WarningModal;
