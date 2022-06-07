import { useFetch } from "../../api";


const RecommendationsView = () => {
  const { isLoading, data } = useFetch({ routeSegments: ["recs", ]});

  return (
    isLoading ? <div>Loading...</div> : <div>{data.map(datum => datum.piece)}</div>
  );
}

export default RecommendationsView;
