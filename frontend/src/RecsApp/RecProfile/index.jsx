import { ViewHeader } from "../SharedComponents";
import { useParams } from "react-router-dom";
import {useFetch} from "../../api";
import RecChain from "../SharedComponents/RecChain";
import styled from "styled-components";
import KeyValueList from "../BaseComponents/KeyValueList";
import { dateShort } from "../../utils";
import DateIcon from "../SharedComponents/DateIcon";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;


const StyledLeft = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  // width: 33%;
  width: min(33%, 400px);
  align-items: center;
  gap: 16px;
`;

const StyledMediaImage = styled.div`
  display: flex;
  border-radius: 8px;
  width: 100%;
  height: 0;
  background-image: url(${props => props.$image});
  background-size: contain;
  background-repeat: no-repeat;
  padding-top: 150%; // Very cool hack to get a 3 : 2 aspect ratio and auto resizing div.
`;

const StyledRight = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 16px;
  
  width: 100%; 
`;

const RecommendationProfile = () => {
  const { id } = useParams();
  const { isLoading, data: rec } = useFetch({ routeSegments: ["recs", id ]});
  const fakeStats = [
    { key: "First created", value: "10/10/2022"},
    { key: "Rating", value: "9.5/10 ⭐"},
    { key: "Times recommended", value: 40034},
  ]
  return (
    isLoading ?
      <div>Loading...</div> :
      <>
        <ViewHeader title={`${rec.piece.name} (${rec.piece.category})`} />
        <div>{rec.piece.description}</div>
        <StyledContainer>
          <StyledLeft>
            <StyledMediaImage $image={rec.piece.picture} />
            <KeyValueList items={fakeStats} />
          </StyledLeft>
          <StyledRight>
            <RecChain giver={rec.giver} receiver={rec.receiver} />
            <KeyValueList items={[
              { key: "Offered on", value: rec.created_on, valueFormatter: value => <DateIcon date={value} />},
              { key: "Followed on", value: rec.followed_on, valueFormatter: value => <DateIcon date={value} />},
              { key: "Ignored on", value: rec.ignored_on, valueFormatter: value => <DateIcon date={value} />}
            ]} />
          </StyledRight>
        </StyledContainer>

      </>
  )
};

export default RecommendationProfile;
