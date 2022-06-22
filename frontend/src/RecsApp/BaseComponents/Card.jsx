import styled from "styled-components";
import { ColorPalette } from "../../../StylingConstants";

/**
 * The most basic form of card, basically just a rounded-corner div.
 */
const Card = styled.div`
  background-color: ${props => props.color ? props.color : ColorPalette.BLACK};
  padding: 12px;
  border-radius: 8px;
`;

export default Card;