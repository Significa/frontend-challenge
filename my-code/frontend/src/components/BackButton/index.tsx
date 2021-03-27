import React from "react";
import { useHistory } from "react-router";

import { Container } from "./styles";

const BackButton: React.FC = () => {
  const history = useHistory();
  const back = React.useCallback(() => {
    history.goBack();
  }, [history]);

  return (
    <Container onClick={back}>
      <img src="/assets/icons/icon-arrow-grey.svg" />
    </Container>
  );
};

export default BackButton;
