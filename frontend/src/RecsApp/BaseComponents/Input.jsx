import styled from "styled-components";
import { ColorPalette } from "../../../StylingConstants";
import { FontSizes } from "../../../Typography";

const Input = styled.input`
  ${FontSizes.MEDIUM}
  border-radius: 36px;
  padding: 12px;
  height: 36px;
  border: none;
  box-sizing: border-box;
  background-color: ${ColorPalette.BLACK};
  color: ${ColorPalette.WHITE};
  outline: 1px solid ${ColorPalette.LIGHT_ORANGE};
  
  &:focus {
    color: ${ColorPalette.BLACK};
    background-color: ${ColorPalette.WHITE};
  }
`;

export default Input;
