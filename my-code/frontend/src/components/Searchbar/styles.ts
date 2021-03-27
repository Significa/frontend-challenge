import styled from "styled-components";
import { theme } from "styled-tools";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background: ${theme("fontColor")};
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 20px;

  svg {
    font-size: 18px;
    color: ${theme("fontColorVariant")};
    margin-left: 13px;
  }
  input {
    font-size: 18px;
    padding: 0 8px;
    height: 45px;
    border: 0;
    flex: 1;

    &::placeholder {
      color: ${theme("fontColorVariant")};
    }
  }
`;
