import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { SessionContextProvider } from "./context/SessionContext.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <SessionContextProvider>
      <App />
    </SessionContextProvider>
    ,
  </ThemeProvider>,
);
