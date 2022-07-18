import styled from "styled-components";
import { useFetch } from "../../api";
import { ViewHeader } from "../SharedComponents";
import RecommendationCard from "../BrowseView/RecommendationCard";

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 12px;
`;

const FriendsView = () => {
  const { isLoading, data } = useFetch({ routeSegments: ["recs", ]});

  console.log('data', data);
  return (
    <>
      <ViewHeader title="Friends" />
      <GridLayout>
        {
          isLoading ?
            <div>Loading...</div> :
            data.map((rec, i) => (
              <RecommendationCard rec={rec} key={`rec_${i}`} />
            ))
        }
      </GridLayout>
    </>
  );
}

export default FriendsView;
