import React from "react";
import debounce from "lodash/debounce";
import Searchbar from "../../components/Searchbar";
import MovieList from "../../components/MovieList";
import api from "../../services/api";
import isCharacterKeyPress from "../../utils/isCharacterKeyPress";
import IdleSearch from "../../components/IdleSearch";
import LoadingSearch from "../../components/LoadingSearch";
import SearchError from "../../components/SearchError";

enum SearchStates {
  Idle,
  Loading,
  Loaded,
  Error,
}

interface IMovieItem {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

const Home: React.FC = () => {
  const [searchState, setSearchState] = React.useState(SearchStates.Idle);
  const [search, setSearch] = React.useState("");
  const [searchData, setSearchData] = React.useState<IMovieItem[]>([]);

  const handleSearch = React.useCallback(
    debounce(async (e: React.FormEvent<HTMLInputElement>): Promise<void> => {
      try {
        const target = e.target as HTMLInputElement;
        setSearch(target.value);
        if (!target.value) {
          setSearchState(SearchStates.Idle);
          return;
        }

        const { data } = await api.get(`/search?s=${target.value}`);
        if (data.Response === "False") {
          setSearchState(SearchStates.Error);
          return;
        }
        setSearchData(data.Search);
        setSearchState(SearchStates.Loaded);
      } catch {
        setSearchState(SearchStates.Error);
      }
    }, 1000),
    [search]
  );

  const handleKeyUp = React.useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (isCharacterKeyPress(e)) {
        setSearchState(SearchStates.Loading);
      }
    },
    [searchState]
  );

  return (
    <React.Fragment>
      <Searchbar
        onChange={handleSearch}
        onKeyDown={handleKeyUp}
        placeholder="Search movies..."
      />
      {searchState === SearchStates.Idle && <IdleSearch />}
      {searchState === SearchStates.Loading && <LoadingSearch />}
      {searchState === SearchStates.Error && <SearchError />}
      {searchState === SearchStates.Loaded && <MovieList items={searchData} />}
    </React.Fragment>
  );
};

export default Home;
