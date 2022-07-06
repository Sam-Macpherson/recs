import styled from "styled-components";
import {Avatar, Card} from "../BaseComponents";
import { CameraMovie } from "@styled-icons/boxicons-regular/CameraMovie";
import { Book } from "@styled-icons/boxicons-regular/Book";
import { Tv } from "@styled-icons/boxicons-regular/Tv";
import { Music } from "@styled-icons/boxicons-regular/Music";
import { Food } from "@styled-icons/fluentui-system-regular/Food";
import { QuestionMarkCircleOutline } from "@styled-icons/evaicons-outline/QuestionMarkCircleOutline";
import { ArrowRight } from "@styled-icons/bootstrap/ArrowRight";
import {FontSizes, FontStyles, FontWeights} from "../../../Typography";
import { getShortName } from "../../utils";
import {ColorPalette, FontColors} from "../../../StylingConstants";

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
  height: 200px;
  background-image: 
    linear-gradient(
      rgba(0, 0, 0, 0.75), 
      rgba(0, 0, 0, 0.75)
    ), 
    url(https://m.media-amazon.com/images/M/MV5BNzc5MTczNDQtNDFjNi00ZDU5LWFkNzItOTE1NzQzMzdhNzMxXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_.jpg);
  background-filter: grayscale(50%);
  background-position: center;
  background-size: cover;
`;

const StyledCardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const StyledHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledChain = styled.div`
  display: flex;
  align-items: center;
  
  > :not(:last-child) {
    margin-right: 8px;
    display: flex;
  }
`;

const StyledPieceTitle = styled.span`
  ${FontSizes.LARGE}
  margin-bottom: 4px;
`;

const StyledPieceSubtitle = styled.span`
  ${FontSizes.SMALL}
  ${FontColors.LIGHT_WHITE}
  ${FontStyles.SINGLE_LINE_ELLIPSIS}
  width: 100%;
  margin-bottom: 4px;  
`

const RecommendationCard = ({ rec }) => {
  return (
    <StyledCard>
      <StyledCardBody>
        <StyledHeader>
          {getIcon(rec.piece.category)}
        </StyledHeader>
        <StyledFooter>
          <StyledPieceTitle>{rec.piece.name}</StyledPieceTitle>
          <StyledPieceSubtitle title={rec.piece.description}>{rec.piece.description}</StyledPieceSubtitle>
          <StyledChain>
            <Avatar size={24}/>
            <span>{getShortName(rec.giver)}</span>
            &nbsp;
            <ArrowRight stroke={ColorPalette.WHITE} color={ColorPalette.ORANGE} size={16} />
            &nbsp;
            <span>{getShortName(rec.receiver)}</span>
            <Avatar size={24}/>
          </StyledChain>
        </StyledFooter>
      </StyledCardBody>
    </StyledCard>
  )
};

export default RecommendationCard;