import styled from "styled-components";
import { theme } from "styled-tools";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1;

  strong {
    font-size: 24px;
    margin-bottom: 8px;
  }

  p {
    color: ${theme("fontColorVariant")};
  }
  img {
    max-width: 40%;
    height: auto;
  }
`;
