import React from "react";
import MovieCard from "../MovieCard";
import { Container } from "./style";

interface IMovieItem {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

interface IProps {
  items: IMovieItem[];
}
const MovieList: React.FC<IProps> = ({ items }) => {
  return (
    <Container data-testid="movie-list">
      {items.map((item) => (
        <MovieCard key={item.imdbID} {...item} />
      ))}
    </Container>
  );
};

export default MovieList;
