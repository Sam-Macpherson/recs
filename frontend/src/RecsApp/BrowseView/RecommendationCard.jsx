import styled from "styled-components";
import { Card} from "../BaseComponents";
import { CameraMovie } from "@styled-icons/boxicons-regular/CameraMovie";
import { Book } from "@styled-icons/boxicons-regular/Book";
import { Tv } from "@styled-icons/boxicons-regular/Tv";
import { Music } from "@styled-icons/boxicons-regular/Music";
import { Food } from "@styled-icons/fluentui-system-regular/Food";
import { QuestionMarkCircleOutline } from "@styled-icons/evaicons-outline/QuestionMarkCircleOutline";
import { FontSizes, FontStyles } from "../../../Typography";
import { FontColors } from "../../../StylingConstants";
import RecChain from "../SharedComponents/RecChain";
import {useNavigate} from "react-router-dom";

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
  cursor: pointer;
  height: 200px;
  background-image: 
    linear-gradient(
      rgba(0, 0, 0, 0.75), 
      rgba(0, 0, 0, 0.75)
    ), 
    url(${props => props.$image});
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
  const navigate = useNavigate();

  return (
    <StyledCard $image={rec.piece.picture} onClick={() => navigate(`/r/${rec.id}`)}>
      <StyledCardBody>
        <StyledHeader>
          {getIcon(rec.piece.category)}
        </StyledHeader>
        <StyledFooter>
          <StyledPieceTitle>{rec.piece.name}</StyledPieceTitle>
          <StyledPieceSubtitle title={rec.piece.description}>{rec.piece.description}</StyledPieceSubtitle>
          <RecChain giver={rec.giver} receiver={rec.receiver} />
        </StyledFooter>
      </StyledCardBody>
    </StyledCard>
  )
};

export default RecommendationCard;