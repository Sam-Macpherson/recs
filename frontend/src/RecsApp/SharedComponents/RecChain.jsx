import {Avatar} from "../BaseComponents";
import {getShortName} from "../../utils";
import {ArrowRight} from "@styled-icons/bootstrap/ArrowRight";
import {ColorPalette} from "../../../StylingConstants";
import styled from "styled-components";

const StyledChain = styled.div`
  display: flex;
  margin: 8px;
  align-items: center;
  
  > :not(:last-child) {
    margin-right: 8px;
    display: flex;
  }
`;

const RecChain = ({ giver, receiver }) => {
  return (
    <StyledChain>
      <Avatar size={24} image={giver.profile_picture}/>
      <span>{getShortName(giver)}</span>
      &nbsp;
      <ArrowRight stroke={ColorPalette.WHITE} color={ColorPalette.ORANGE} size={16} />
      &nbsp;
      <span>{getShortName(receiver)}</span>
      <Avatar size={24} image={receiver.profile_picture}/>
    </StyledChain>
  );
};

export default RecChain;
