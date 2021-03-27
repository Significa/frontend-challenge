import React from "react";
import { Container } from "./styles";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <Container>
      <Link to="/">
        <div className="circle-shape">
          <FaPlay />
        </div>
        <strong>What's in</strong>
      </Link>
    </Container>
  );
};

export default Header;
