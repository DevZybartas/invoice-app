import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { GlobalStyles } from "./styles/Global.ts";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/Theme.ts";
import { BrowserRouter } from "react-router-dom";

import { AppThemeProvider } from "./context/ThemeContext.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AppThemeProvider>
          <GlobalStyles />
          <App />
        </AppThemeProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
