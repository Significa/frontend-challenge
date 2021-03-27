import * as React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { expect } from "chai";
import Home from "../../pages/Home";
import MockAdapter from "axios-mock-adapter";
import api from "../../services/api";

const apiMock = new MockAdapter(api);

describe("<Home />", async () => {
  it("Should be able to search a movie", async () => {
    apiMock.onGet("search?s=What").reply(200, {
      Search: [
        {
          Title: "What Women Want",
          Year: "2000",
          imdbID: "tt0207201",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BZjUyZWE5YmMtNDA2ZC00NzFlLTg0MzktOTgzYjA2ZWE3NmIwXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
        },
      ],
      totalResults: "4241",
      Response: "True",
    });
    const { getByPlaceholderText, getByTestId } = render(<Home />);
    const searchField = getByPlaceholderText("Search movies...");
    fireEvent.change(searchField, { target: { value: "What" } });

    await waitFor(() => {
      expect(document.contains(getByTestId("movie-list")));
    });
  });

  it("Should display the loading component on keydown", async () => {
    const { getByPlaceholderText, getByTestId } = render(<Home />);
    const searchField = getByPlaceholderText("Search movies...");
    fireEvent.keyDown(searchField, { key: "A" });

    expect(document.contains(getByTestId("loading-search")));
  });

  it("Should show an error message when the movie doesn't exist", async () => {
    apiMock.onGet("search?s=0x41").reply(200, {
      Error: "Not Found",
      totalResults: "4241",
      Response: "False",
    });
    const { getByPlaceholderText, getByTestId } = render(<Home />);
    const searchField = getByPlaceholderText("Search movies...");
    fireEvent.change(searchField, { target: { value: "0x41" } });

    await waitFor(() => {
      expect(document.contains(getByTestId("search-error")));
    });
  });
});
