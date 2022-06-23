import styled from "styled-components";
import {Avatar, Card} from "../BaseComponents";
import { CameraMovie } from "@styled-icons/boxicons-regular/CameraMovie";
import { Book } from "@styled-icons/boxicons-regular/Book";
import { Tv } from "@styled-icons/boxicons-regular/Tv";
import { Music } from "@styled-icons/boxicons-regular/Music";
import { Food } from "@styled-icons/fluentui-system-regular/Food";
import { QuestionMarkCircleOutline } from "@styled-icons/evaicons-outline/QuestionMarkCircleOutline";
import { ArrowReturnRight } from "@styled-icons/bootstrap/ArrowReturnRight";
import { FontSizes, FontWeights } from "../../../Typography";
import { getShortName } from "../../utils";
import {ColorPalette} from "../../../StylingConstants";

const getIcon = (category, size = 24) => {
  switch(category) {
    case "Movie":
      return <CameraMovie size={size} />
    case "TV Show":
      return <Tv size={size} />
    case "Book":
      return <Book size={size} />
    case "Music":
      return <Music size={size} />
    case "Restaurant":
      return <Food size={size} />
    default:
      return <QuestionMarkCircleOutline size={size} />
  }
}

const StyledCard = styled(Card)`
  display: flex;
  justify-content: space-between;
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url(https://m.media-amazon.com/images/M/MV5BNzc5MTczNDQtNDFjNi00ZDU5LWFkNzItOTE1NzQzMzdhNzMxXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_.jpg);
  background-filter: grayscale(50%);
  background-position: center;
  background-size: cover;
  height: 200px;
`;

const StyledCardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

const StyledHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin-bottom: 8px;
`;

const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledChain = styled.div`
  display: flex;
  align-items: center;
  ${FontSizes.MEDIUM};
  
  > :not(:last-child) {
    margin-right: 8px;
    display: flex;
  }
  
  > :nth-child(3) {
    display: flex;
    align-items: center;
  }
`;

const StyledPieceTitle = styled.span`
  ${FontWeights.BOLD}
`;

const RecommendationCard = ({ rec }) => {
  return (
    <StyledCard>
      <StyledCardBody>
        <StyledHeader>
          {getIcon(rec.piece.category)}
        </StyledHeader>
        <StyledFooter>
          <StyledPieceTitle>{rec.piece.name}</StyledPieceTitle>
          <StyledChain>
            <Avatar size={24}/>
            <div>
              {getShortName(rec.giver)}
              &nbsp;
              <ArrowReturnRight stroke={ColorPalette.ORANGE} color={ColorPalette.ORANGE} size={16} />
              &nbsp;
              {getShortName(rec.receiver)}
            </div>
            <Avatar size={24}/>
          </StyledChain>
        </StyledFooter>
      </StyledCardBody>
    </StyledCard>
  )
};

export default RecommendationCard;