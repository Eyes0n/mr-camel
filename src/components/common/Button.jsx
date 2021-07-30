import React, { Component } from "react";
import styled, { css } from "styled-components";
import { darken } from "polished";

class Button extends Component {
  render() {
    const { svg = null, value, size = "small", color } = this.props;
    return (
      <StyledButton size={size} color={color}>
        {svg && <img src={svg} alt="" />}
        {value}
      </StyledButton>
    );
  }
}

//* 버튼 색상 구하기
const getButtonColor = (color) => {
  switch (color) {
    case "blue":
      return css`
        background-color: ${({ theme }) => theme.color.badge};
        color: ${({ theme }) => theme.color.white};

        ${({ theme }) =>
          css`
            &:hover {
              background: ${darken(0.1, theme.color.badge)};
            }
          `}
      `;
    default:
      return css`
        background-color: ${({ theme }) => theme.color.white};
        color: ${({ theme }) => theme.color.badge};
        border: 1px solid ${({ theme }) => theme.color.badge};

        ${({ theme }) =>
          css`
            &:hover {
              background: ${darken(0.1, theme.color.background)};
            }
          `}
      `;
  }
};

//* 버튼 크기 구하기
const getButtonSize = (size) => {
  switch (size) {
    case "large":
      return css`
        width: 180px;
        height: 42px;
      `;
    case "small":
      return css`
        font-size: 0.75rem;
        height: 24px;
      `;
    default:
      return "";
  }
};

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 0 15px;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;

  ${({ color }) => getButtonColor(color)};
  ${({ size }) => getButtonSize(size)}

  img {
    width: 25px;
    padding-right: 6px;
  }
`;

export default Button;
