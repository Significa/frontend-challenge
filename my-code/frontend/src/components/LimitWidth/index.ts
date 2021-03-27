import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1190px;
  min-height: 100vh;

  @media only screen and (max-width: 768px) {
    padding: 0 25px;
  }
`;
export default Container;
