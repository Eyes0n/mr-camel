import React, { Component } from "react";
import styled from "styled-components";

class CheckBox extends Component {
  render() {
    const { value, checked, onChange } = this.props;
    return (
      <Wrapper checked={checked}>
        <input type="checkbox" checked={checked} onChange={onChange} />
        {value}
      </Wrapper>
    );
  }
}

const Wrapper = styled.label`
  height: 24px;
  padding: 6px;
  border-radius: 8px;
  font-size: 0.75rem;

  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme, checked }) =>
    checked ? theme.color.badge : theme.color.borderline};

  input[type="checkbox"] {
    margin: 0;
    border: 0;
    width: 0;
    height: 0;
    -webkit-appearance: none;
  }
`;

export default CheckBox;
