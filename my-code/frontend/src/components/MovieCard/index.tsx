import React from "react";
import { Container, Overlay } from "./styles";
import { useHistory } from "react-router";
import useLike from "../../hooks/useLike";
interface IProps {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

const MovieCard: React.FC<IProps> = ({ Poster, Title, Year, imdbID }) => {
  const history = useHistory();
  const { liked, handleLike } = useLike(imdbID);

  const handleRoute = () => {
    history.push(`/m/${imdbID}`);
  };

  return (
    <Container
      onClick={handleRoute}
      background={Poster === "N/A" ? undefined : Poster}
    >
      <Overlay>
        <button className="like-button" onClick={handleLike}>
          <img
            src={
              liked
                ? "/assets/icons/icon-heart-full.svg"
                : "/assets/icons/icon-heart-white.svg"
            }
            alt="Heart"
          />
        </button>

        <div className="movie-info">
          <span className="title">{Title}</span>
          <span>{Year}</span>
        </div>
      </Overlay>
    </Container>
  );
};

export default MovieCard;
