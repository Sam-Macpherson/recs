import styled from "styled-components";
import { useFetch } from "../../api";
import { Card } from "../BaseComponents";
import { ViewHeader } from "../SharedComponents";

const RecommendationCard = styled(Card)`
`;

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 12px;
`

const GroupsView = () => {
  const { isLoading, data } = useFetch({ routeSegments: ["recs", ]});

  return (
    <>
      <ViewHeader title="Groups" />
      <GridLayout>
        {
          isLoading ?
            <div>Loading...</div> :
            data.map((datum, i) => <RecommendationCard>{datum.piece}</RecommendationCard>)
        }
      </GridLayout>
    </>

  );
}

export default GroupsView;
