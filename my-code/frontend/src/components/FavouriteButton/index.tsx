import React from "react";
import useLike from "../../hooks/useLike";

import { Container } from "./styles";

interface IProps {
  imdbID: string;
}
const FavouriteButton: React.FC<IProps> = ({ imdbID }) => {
  const { liked, handleLike } = useLike(imdbID);

  return (
    <Container onClick={handleLike} liked={liked}>
      <img
        src={
          liked
            ? "/assets/icons/icon-heart-full.svg"
            : "/assets/icons/icon-heart-white.svg"
        }
        alt=""
      />
      {liked ? "Added" : "Add to favourites"}
    </Container>
  );
};

export default FavouriteButton;
