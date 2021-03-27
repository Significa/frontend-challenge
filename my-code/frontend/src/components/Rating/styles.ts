import styled, { css } from "styled-components";
import { switchProp, theme } from "styled-tools";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  border-radius: 5px;
  overflow: hidden;
  height: 40px;
  border: 1px solid ${theme("borderVariant")};
  margin-right: 20px;
  .value {
    padding: 0 6px;
  }
`;

interface IReviewerProps {
  reviewer: string;
}

export const Reviewer = styled.div<IReviewerProps>`
  display: flex;
  align-items: center;
  width: fit-content;
  padding: 0 10px;
  height: 100%;
  background: ${theme("yellow")};
  ${switchProp("reviewer", {
    "Rotten Tomatoes": css`
      background: ${theme("red")};
    `,
    "Internet Movie Database": css`
      background: ${theme("yellow")};
    `,
  })}
`;
