import React, { Component } from "react";
import styled from "styled-components";

class WaringModal extends Component {
  constructor() {
    super();

    this.wrapperRef = React.createRef();
  }

  handleClickOutSide = (e) => {
    const { isShowWarningPopup } = this.props;
    if (this.wrapperRef && this.wrapperRef.current.contains(e.target)) {
      isShowWarningPopup(false);
    }
  };

  render() {
    const { isShow } = this.props;
    return (
      <Overlay ref={this.wrapperRef} isShow={isShow} onClick={this.handleClickOutSide}>
        <div>
          <p>관심 없는 상품이므로 상세 페이지로 이동할 수 없습니다.</p>
        </div>
      </Overlay>
    );
  }
}

const Overlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: ${({ isShow }) => (isShow ? "block" : "none")};
  width: 100%;
  height: 50px;
  border-radius: 10px;
  /* overflow: hidden; */
  background-color: rgba(0, 0, 0 0.4);

  span {
    color: white;
    background-color: red;
    padding: 10px;
  }
`;

export default WaringModal;
