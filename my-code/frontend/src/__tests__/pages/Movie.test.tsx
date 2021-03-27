import * as React from "react";
import { render, waitFor } from "@testing-library/react";
import { expect } from "chai";
import { BrowserRouter } from "react-router-dom";
import MockAdapter from "axios-mock-adapter";
import App from "../../App";
import api from "../../services/api";

const apiMock = new MockAdapter(api);

const renderWithRouter = (ui: JSX.Element, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);

  return render(ui, { wrapper: BrowserRouter });
};

describe("<Movie />", () => {
  it("Should proplerly render the movie details page", async () => {
    apiMock.onGet("/movie/tt012344").reply(200, {
      Title: "What Women Want",
      Year: "2000",
      Rated: "PG-13",
      Released: "15 Dec 2000",
      Runtime: "127 min",
      Genre: "Comedy, Fantasy, Romance",
      Director: "Nancy Meyers",
      Writer:
        "Josh Goldsmith (story), Cathy Yuspa (story), Diane Drake (story), Josh Goldsmith (screenplay), Cathy Yuspa (screenplay)",
      Actors: "Mel Gibson, Helen Hunt, Marisa Tomei, Alan Alda",
      Plot:
        "A cocky, chauvinistic advertising executive magically acquires the ability to hear what women are thinking.",
      Language: "English",
      Country: "USA",
      Awards: "Nominated for 1 Golden Globe. Another 5 wins & 8 nominations.",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZjUyZWE5YmMtNDA2ZC00NzFlLTg0MzktOTgzYjA2ZWE3NmIwXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
      Ratings: [
        {
          Source: "Internet Movie Database",
          Value: "6.4/10",
        },
        {
          Source: "Rotten Tomatoes",
          Value: "54%",
        },
        {
          Source: "Metacritic",
          Value: "47/100",
        },
      ],
      Metascore: "47",
      imdbRating: "6.4",
      imdbVotes: "192,563",
      imdbID: "tt0207201",
      Type: "movie",
      DVD: "01 Aug 2013",
      BoxOffice: "$182,811,707",
      Production:
        "Paramount Pictures, Icon Entertainment International, Wind Dancer Productions",
      Website: "N/A",
      Response: "True",
    });
    const { getByTestId } = renderWithRouter(<App />, { route: "/m/tt012344" });
    await waitFor(() => {
      expect(document.contains(getByTestId("movie-details")));
    });
  });

  it("Should display an error message when the movie ID is not valid", async () => {
    apiMock.onGet("/movie/tt012344").reply(200, {
      Error: "Invalid IMDB ID!",
      Response: "False",
    });
    const { getByTestId } = renderWithRouter(<App />, {
      route: "/m/INVALIDID",
    });
    await waitFor(() => {
      expect(document.contains(getByTestId("search-error")));
    });
  });
});
