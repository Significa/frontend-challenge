import React from "react";

import { Container, Reviewer } from "./styles";

export interface IProps {
  Source: string;
  Value: string;
}

const reviewerImages = {
  "Internet Movie Database": "/assets/logos/logo-imdb.svg",
  "Rotten Tomatoes": "/assets/logos/logo-rotten-tomatoes.svg",
};

const Rating: React.FC<IProps> = ({ Source, Value }) => {
  const reviewerImage = reviewerImages[Source];
  if (!reviewerImage) return null;

  return (
    <Container>
      <Reviewer reviewer={Source}>
        <img src={reviewerImage} alt={Source} />
      </Reviewer>
      <span className="value">{Value}</span>
    </Container>
  );
};

export default Rating;
