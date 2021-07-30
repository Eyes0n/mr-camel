import React, { Component } from "react";
import styled from "styled-components";

class WaringModal extends Component {
  render() {
    const { isShow, isShowWarningPopup } = this.props;

    return (
      <Overlay isShow={isShow} onClick={() => isShowWarningPopup(false)}>
        <p>관심 없는 상품이므로 상세 페이지로 이동할 수 없습니다.</p>
      </Overlay>
    );
  }
}

const Overlay = styled.div`
  position: absolute;
  display: ${({ isShow }) => (isShow ? "block" : "none")};
  inset: 0;
  background-color: rgba(0, 0, 0 0.4);

  p {
  }
`;

export default WaringModal;
