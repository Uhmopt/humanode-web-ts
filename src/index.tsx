import { ThemeProvider } from "@mui/material";
import App from "App";
import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { darkTheme } from "./theme";

ReactDOM.render(
    <ThemeProvider theme={darkTheme}>
        <App />
    </ThemeProvider>,
    document.getElementById("root"));
serviceWorker.unregister();