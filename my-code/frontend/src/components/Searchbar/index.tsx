import React from "react";
import { FaSearch } from "react-icons/fa";
import { Container } from "./styles";

interface ISearchbar extends React.HTMLProps<HTMLInputElement> {}

const Searchbar: React.FC<ISearchbar> = (props) => {
  return (
    <Container>
      <FaSearch />
      <input {...props} />
    </Container>
  );
};

export default Searchbar;
