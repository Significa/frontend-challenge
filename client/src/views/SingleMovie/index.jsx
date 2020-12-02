import React, { useState, useEffect } from "react";
import axios from "axios";

import Plot from "./Plot";
import BehindTheScenes from "./BehindTheScenes";
import Rating from "./Rating";
import Arrow from "../../components/Arrow";
import MoviePlaceholder from "../../images/3.Pictures/movie-placeholder.jpg";
import IMDbIcon from "../../images/2.Logos/logo-imdb.svg";
import RottenTomatoesIcon from "../../images/2.Logos/logo-rotten-tomatoes.svg";
import HeartFavorites from "../../components/HeartFavorites";

import "./styles.scss";

const SingleMovie = ({ match, favorites, setFavorites }) => {
  const [movieDisplayed, setMovieDisplayed] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const id = match.params.id;
    const movie = async () => {
      const { data } = await axios.get(
        `http://www.omdbapi.com/?i=${id}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`,
      );

      console.log(data);
      setMovieDisplayed(data);
    };
    movie();
  }, [match.params.id]);

  const addToFavorites = () => {
    const movie = movieDisplayed.Title;
    if (!favorites.includes(movie)) setFavorites([...favorites, movie]);
  };

  const rottenTomatoesHasRating =
    movieDisplayed !== null &&
    movieDisplayed.Ratings.find((item) => item.Source === "Rotten Tomatoes");

  return (
    <div>
      <Arrow className="mt-2" to="/" type="back" alt="arrow back" />
      {movieDisplayed && (
        <main className="d-flex">
          <div className="col-md-6 p-0">
            <div className="movie-specifications-container">{`${movieDisplayed.Runtime} · ${movieDisplayed.Year} · R`}</div>
            <h1 className="font-bold">{movieDisplayed.Title}</h1>
            <div className="d-flex mt-4">
              <Rating
                rate={movieDisplayed.imdbRating}
                rateSource="imdbRating"
                icon={IMDbIcon}
              />
              {rottenTomatoesHasRating && (
                <Rating
                  rate={
                    movieDisplayed.Ratings.find(
                      (item) => item.Source === "Rotten Tomatoes",
                    ).Value || ""
                  }
                  rateSource="Rotten Tomatoes"
                  icon={RottenTomatoesIcon}
                />
              )}
              <div
                className={`d-flex align-items-center add-favorites-btn ${
                  favorites.includes(movieDisplayed.Title) && "added"
                }`}
                onClick={addToFavorites}
              >
                <HeartFavorites
                  type={!favorites.includes(movieDisplayed.Title) && "grey"}
                  alt="heart icon"
                  className="px-2"
                />

                <p className="m-0 px-2 pr-3 ">
                  {favorites.includes(movieDisplayed.Title)
                    ? "Added"
                    : "Add to favorites"}
                </p>
              </div>
            </div>
            <Plot plot={movieDisplayed.Plot} />
            <section className="w-75 d-flex justify-content-between mt-5">
              <BehindTheScenes
                header="Cast"
                headerProperites={
                  movieDisplayed.Actors
                    ? movieDisplayed.Actors.split(",")
                    : ["N/A"]
                }
              />
              <BehindTheScenes
                header="Genre"
                headerProperites={
                  movieDisplayed.Genre
                    ? movieDisplayed.Genre.split(",")
                    : ["N/A"]
                }
              />
              <BehindTheScenes
                header="Director"
                headerProperites={
                  movieDisplayed.Director
                    ? movieDisplayed.Director.split(",")
                    : ["N/A"]
                }
              />
            </section>
          </div>
          <div className="col-md-5 p-0 ml-5">
            <img
              src={
                movieDisplayed.Poster !== "N/A"
                  ? movieDisplayed.Poster
                  : MoviePlaceholder
              }
              alt="movie poster"
              className="w-100 rounded"
            />
          </div>
        </main>
      )}
    </div>
  );
};

export default SingleMovie;
