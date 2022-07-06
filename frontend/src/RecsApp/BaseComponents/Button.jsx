import styled from "styled-components";
import { ColorPalette } from "../../../StylingConstants";
import {FontSizes, FontStyles} from "../../../Typography";


const Button = styled.button`
  ${FontSizes.MEDIUM}
  background: ${ColorPalette.LIGHT_ORANGE};
  
  &:hover {
    transition: 0.2s;
    background: ${ColorPalette.LIGHTEST_ORANGE};
  }
  
  &:active {
    transition: 0.2s;
    background: ${ColorPalette.ORANGE};
  }
  
  color: ${ColorPalette.WHITE};
  border: none;
  border-radius: 4px;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  justify-content: center;
  min-width: 0;
  outline: none;
  height: 36px;
  padding: 4px 12px;
`;

export default Button;
