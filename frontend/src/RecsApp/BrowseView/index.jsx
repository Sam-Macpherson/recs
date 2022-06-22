import styled from "styled-components";
import { useFetch } from "../../api";
import { ViewHeader } from "../SharedComponents";
import RecommendationCard from "./RecommendationCard";
import { CameraMovie } from "@styled-icons/boxicons-regular/CameraMovie";


const GridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 12px;
`

const BrowseView = () => {
  const { isLoading, data } = useFetch({ routeSegments: ["recs", ]});
  console.log('data', data);
  return (
    <>
      <ViewHeader title="Browse" />
      <GridLayout>
        {
          isLoading ?
            <div>Loading...</div> :
            data.map((datum, i) => (
              <RecommendationCard rec={datum} key={`rec_${i}`} />
            ))
        }
      </GridLayout>
    </>

  );
}

export default BrowseView;
