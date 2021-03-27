import React from "react";
import Lottie from "react-lottie";

import { Container } from "./styles";
import animationData from "../../lottie/error-cone.json";

const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const SearchError: React.FC = () => {
  return (
    <Container data-testid="search-error">
      <Lottie options={defaultOptions} height={200} width={200} />
      <strong>
        Oops...Looks like we couldn't find what you were looking for
      </strong>
      <p>Try searching a different title, maybe?</p>
    </Container>
  );
};

export default SearchError;
