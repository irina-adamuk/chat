import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';

import { ThemeProvider, createTheme } from "@mui/material";
import { store, persistor } from './store';
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
