import React from "react";
import GlobalStyles from "./styles/global";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import dark from "./themes/dark";
import Routes from "./routes";
import Header from "./components/Header";
import LimitWidth from "./components/LimitWidth";

const App = () => {
  return (
    <>
      <ThemeProvider theme={dark}>
        <GlobalStyles />
        <LimitWidth>
          <BrowserRouter>
            <Header />
            <Routes />
          </BrowserRouter>
        </LimitWidth>
      </ThemeProvider>
    </>
  );
};

export default App;
