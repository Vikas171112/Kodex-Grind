import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { SessionContextProvider } from "./context/SessionContext.jsx";

createRoot(document.getElementById("root")).render(
  <SessionContextProvider>
    <App />
  </SessionContextProvider>,
);
