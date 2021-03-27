import styled from "styled-components";
import { prop, theme } from "styled-tools";

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;

  @media only screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const MovieInfoContainer = styled.div`
  flex: 1.35;
  ul.runtime-rated-title {
    list-style: none;
    max-width: 100%;

    display: flex;
    align-items: center;
    flex-wrap: wrap;
    li {
      display: flex;
      align-items: center;
      position: relative;
      font-size: 18px;
      color: ${theme("fontColorVariant")};
      margin-top: 5px;
    }

    li.rated {
      span {
        border-radius: 5px;
        padding: 5px;
        font-weight: bold;
        color: ${theme("background")};
        background: ${theme("fontColorVariant")};
      }
    }

    li + li {
      &::before {
        display: block;
        content: "";
        margin: 0 6px;

        width: 2px;
        height: 2px;
        border-radius: 50%;
        background: ${theme("fontColorVariant")};
      }
    }
  }

  h1 {
    font-size: 60px;
    margin-bottom: 35px;

    @media only screen and (max-width: 768px) {
      font-size: 35px;
    }
  }

  .ratings {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }
`;

interface IPosterProps {
  url?: string;
}
export const Poster = styled.div<IPosterProps>`
  width: 40%;
  max-height: 85%;
  background-size: cover;
  background-position: center;
  background-image: url(${prop(
    "url",
    "https://place-hold.it/250x400/FF9F1C&text=N/A"
  )});
  border-radius: 8px;
  max-height: 80;

  @media only screen and (max-width: 768px) {
    min-height: 300px;
    width: 100%;
    max-height: 100%;
    margin: 15px 0;
  }
`;

export const PlotContainer = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  max-width: 65%;
  @media only screen and (max-width: 768px) {
    max-width: 100%;
    width: 100%;
  }
  strong {
    color: ${theme("fontColorVariant")};
    margin-bottom: 10px;
  }
  p {
    line-height: 1.6;
  }
`;

export const CastGenreDirector = styled.ul`
  margin-top: 40px;
  display: flex;
  list-style: none;
  width: 65%;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }

  li {
    display: flex;
    flex-direction: column;
    strong {
      color: ${theme("fontColorVariant")};
      margin-bottom: 15px;
    }
    span {
      line-height: 1.6;
      color: ${theme("fontColor")};
    }
  }
  li + li {
    margin-left: auto;
  }
`;
