import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 20px;
  flex: 1;

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    height: 200px;
  }
`;
