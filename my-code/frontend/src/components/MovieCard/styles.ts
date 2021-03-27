import styled from "styled-components";
import { prop, theme } from "styled-tools";

export const Overlay = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${theme("borderVariant")};
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s;
  padding: 10px;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 10px;
    font-size: 20px;
    border: 0;
    background: transparent;
    color: ${theme("fontColor")};
  }
  .movie-info {
    margin-top: auto;
    display: flex;
    flex-direction: column;
    color: ${theme("fontColor")};
    span.title {
      font-size: 20px;
    }
  }
`;

interface IContainerProps {
  background?: string;
}

export const Container = styled.div<IContainerProps>`
  cursor: pointer;
  position: relative;
  margin-right: auto;
  background-image: url(${prop(
    "background",
    "https://place-hold.it/250x400/FF9F1C&text=Poster"
  )});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 250px;
  border-radius: 5px;
  overflow: hidden;
  &:hover {
    ${Overlay} {
      visibility: visible;
      opacity: 0.95;
    }
  }
`;
