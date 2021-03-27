import React from "react";

import { Container } from "./styles";
import animationData from "../../lottie/loading-animation.json";
import Lottie from "react-lottie";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const LoadingSearch: React.FC = () => {
  return (
    <Container id="test" data-testid="loading-search">
      <Lottie options={defaultOptions} height={200} width={200} />
      <strong>Loading your results...</strong>
    </Container>
  );
};

export default LoadingSearch;
