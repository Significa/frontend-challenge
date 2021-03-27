import React from "react";

import { Container } from "./styles";

const IdleSearch: React.FC = () => {
  return (
    <Container>
      <img src="/assets/illustrations/illustration-empty-state.png" alt="" />
      <strong>Don't know what to search?</strong>
      <p>Here's an offer you can't refuse</p>
    </Container>
  );
};

export default IdleSearch;
