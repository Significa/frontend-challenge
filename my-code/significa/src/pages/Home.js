import React, { useState, useEffect } from "react";

import Layout from "../components/layout";
import magnifier from "../assets/icons/icon-magnifier-grey.svg";
import illustrationSm from "../assets/illustrations/illustration-empty-state.png";
import illustrationLg from "../assets/illustrations/illustration-empty-state@2x.png";
import "./Home.css";

const Home = () => {
  /* set variables that use state */
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [movies, setMovies] = useState([]);

  /* function that handles change in the search bar */
  const handleChange = (e) => {
    /* console.log(e.target.value); */
    return setQuery(e.target.value);
  };

  /* fetch list of movies from the api */
  useEffect(() => {
    const requestUrl = encodeURI(
      `http://www.omdbapi.com/?s=${query}&apikey=7255c9dd`
    );
    const getList = async () => {
      try {
        let response = await fetch(requestUrl);
        let json = await response.json();
        setIsLoaded(true);
        setMovies(json.Search);
        /* console.log(movies); */
      } catch (error) {
        setIsLoaded(true);
        setError(error);
        /* console.log("Error!", error); */
      }
    };

    return getList();
  }, [query]);

  /* return different layouts depending on the current results */
  if (error) {
    /* render if there was an error getting the data */
    return (
      <Layout>
        <div className="search-bar">
          <img src={magnifier} alt="magnifier" className="search-bar__icon" />
          <input
            type="text"
            id="search"
            placeholder="Search movies..."
            onChange={handleChange}
            className="search-bar__input"
          />
        </div>
        <section className="error-block">
          <h1>Error: {error.message}</h1>
        </section>
      </Layout>
    );
  } else if (!isLoaded) {
    /* render if data is loading */
    return (
      <Layout>
        <div className="search-bar">
          <img src={magnifier} alt="magnifier" className="search-bar__icon" />
          <input
            type="text"
            id="search"
            placeholder="Search movies..."
            onChange={handleChange}
            className="search-bar__input"
          />
        </div>
        <section className="loading-block">
          <h1>Loading...</h1>
        </section>
      </Layout>
    );
  } else if (typeof movies !== "undefined" && movies.length > 0) {
    /* render list of movies if there's any */
    return (
      <Layout>
        <div className="search-bar">
          <img src={magnifier} alt="magnifier" className="search-bar__icon" />
          <input
            type="text"
            id="search"
            placeholder="Search movies..."
            onChange={handleChange}
            className="search-bar__input"
          />
        </div>
        <section className="movies-block">
          <ul className="movies-block__list">
            {movies.map((movie) => (
              <li className="movies-block__list__movie" key={movie.imdbID}>
                <img
                  id={movie.imdbID}
                  src={movie.Poster}
                  title={movie.Title}
                  year={movie.Year}
                  alt={movie.Title}
                />
              </li>
            ))}
          </ul>
        </section>
      </Layout>
    );
  } else {
    /* render initial search bar + illustration if no request has been made */
    return (
      <Layout>
        <div className="search-bar">
          <img src={magnifier} alt="magnifier" className="search-bar__icon" />
          <input
            type="text"
            id="search"
            placeholder="Search movies..."
            onChange={handleChange}
            className="search-bar__input"
          />
        </div>
        <section className="initial-block">
          <div className="initial-block__image-container">
            <picture>
              <source media="(min-width:768px)" srcSet={illustrationLg} />
              <img
                src={illustrationSm}
                alt="illustration of a horse's severed head"
                className="initial-block__image"
              />
            </picture>
          </div>
          <h2 className="initial-block__title">Don't know what to search?</h2>
          <h4 className="initial-block__subtitle">
            Here's an offer you can't refuse...
          </h4>
        </section>
      </Layout>
    );
  }
};

export default Home;
