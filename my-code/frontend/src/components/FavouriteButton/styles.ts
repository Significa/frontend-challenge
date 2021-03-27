import styled, { css } from "styled-components";
import { ifProp, theme } from "styled-tools";

interface IButtonProps {
  liked: boolean;
}
export const Container = styled.button<IButtonProps>`
  min-height: 40px;
  img {
    max-width: 20%;
    margin-right: 6px;
  }

  display: flex;
  align-items: center;
  padding: 0 10px;
  border-radius: 5px;
  border: 1px solid ${theme("borderVariant")};
  background: transparent;
  color: ${theme("fontColor")};
  ${ifProp(
    "liked",
    css`
      background: ${theme("red")};
    `
  )}
`;
