import styled from "styled-components";
import { Card } from "../BaseComponents";
import { CameraMovie } from "@styled-icons/boxicons-regular/CameraMovie";
import { Book } from "@styled-icons/boxicons-regular/Book";

const getIcon = category => {
  switch(category) {
    case "Movie":
      return <CameraMovie size={24} />
    case "Book":
      return <Book size={24} />
  }
}

const RecommendationCard = ({ rec }) => {
  return (
    <Card>
      {getIcon(rec.piece.category)}
      {rec.piece.name}
      <p>{rec.giver.full_name} => {rec.receiver.full_name}</p>
    </Card>
  )
};

export default RecommendationCard;