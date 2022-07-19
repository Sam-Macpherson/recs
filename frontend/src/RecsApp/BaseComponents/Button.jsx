import styled, { css } from "styled-components";
import { ColorPalette } from "../../../StylingConstants";
import { FontSizes } from "../../../Typography";


const Button = styled.button`
  ${FontSizes.MEDIUM}
  ${props => props.primary ? css`
    background: ${ColorPalette.LIGHT_ORANGE};
    border: none;
  ` : css`
    background: ${ColorPalette.GRAY};
    border: 1px solid;
    border-color: ${ColorPalette.LIGHT_ORANGE};
  `}
  
  &:hover {
    transition: 0.2s;
    ${props => props.primary ? css`
      background: ${ColorPalette.LIGHTEST_ORANGE};
    ` : css`
      background: ${ColorPalette.HIGHLIGHT_GRAY};
    `}
  }
  
  &:active {
    transition: 0.2s;
    ${props => props.primary ? css`
      background: ${ColorPalette.ORANGE};
    ` : css`
      background: ${ColorPalette.DARK_GRAY};
    `}
  }
  
  color: ${ColorPalette.WHITE};
  border-radius: 36px;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  justify-content: center;
  min-width: 0;
  outline: none;
  height: 36px;
  padding: 12px;
`;

export default Button;
