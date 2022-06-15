import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

import light from "./global/styles/light";

import store from "./store";

import GlobalStyle from "./global/styles/globals";
import { AppRoutes } from "./Routes";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={light}>
        <BrowserRouter>
          <GlobalStyle />

          <AppRoutes/>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
