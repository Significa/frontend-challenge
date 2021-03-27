import React from "react";
import { useParams } from "react-router";
import { IMovieDetails } from "./types";
import api from "../../services/api";
import BackButton from "../../components/BackButton";
import {
  Container,
  MovieInfoContainer,
  Poster,
  PlotContainer,
  CastGenreDirector,
} from "./styles";
import Rating from "../../components/Rating";
import FavouriteButton from "../../components/FavouriteButton";
import SearchError from "../../components/SearchError";
import LoadingSearch from "../../components/LoadingSearch";
interface IParams {
  id: string;
}

enum RequestStatus {
  Idle,
  Loading,
  Loaded,
  Error,
}

const Movie: React.FC = () => {
  const [status, setStatus] = React.useState(RequestStatus.Idle);
  const [details, setDetails] = React.useState<IMovieDetails | undefined>();
  const params: IParams = useParams();
  React.useEffect(() => {
    (async function () {
      try {
        setStatus(RequestStatus.Loading);
        const { data }: { data: IMovieDetails } = await api.get(
          `/movie/${params.id}`
        );
        if (data.Response === "False") {
          setStatus(RequestStatus.Error);
          return;
        }

        setDetails(data);
        setStatus(RequestStatus.Loaded);
      } catch {
        setStatus(RequestStatus.Error);
      }
    })();
  }, []);

  if (status === RequestStatus.Loading) return <LoadingSearch />;
  if (status === RequestStatus.Error) return <SearchError />;

  return (
    <React.Fragment>
      <BackButton />
      <Container data-testid="movie-details">
        <MovieInfoContainer>
          <ul className="runtime-rated-title">
            <li>{details?.Runtime}</li>
            <li>{details?.Year}</li>
            <li className="rated">
              <span>{details?.Rated}</span>
            </li>
          </ul>
          <h1>{details?.Title}</h1>
          <div className="ratings">
            {details?.Ratings.map((rating) => (
              <Rating key={rating.Source} {...rating} />
            ))}
            <FavouriteButton imdbID={details?.imdbID || ""} />
          </div>

          <PlotContainer>
            <strong>Plot</strong>
            <p>{details?.Plot}</p>
          </PlotContainer>
          <CastGenreDirector>
            <li>
              <strong>Cast</strong>
              {details?.Actors.split(",").map((a) => (
                <span key={a}>{a}</span>
              ))}
            </li>
            <li>
              <strong>Genre</strong>
              {details?.Genre.split(",").map((g) => (
                <span key={g}>{g}</span>
              ))}
            </li>
            <li>
              <strong>Director</strong>
              {details?.Director.split(",").map((d) => (
                <span key={d}>{d}</span>
              ))}
            </li>
          </CastGenreDirector>
        </MovieInfoContainer>
        <Poster url={details?.Poster === "N/A" ? undefined : details?.Poster} />
      </Container>
    </React.Fragment>
  );
};

export default Movie;
