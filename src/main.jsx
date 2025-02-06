import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { Reset } from "styled-reset";
import App from "./App.jsx";
import store from "./redux/config/store.js"


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <Reset />
      <App />
    </Provider>
  </StrictMode>
);
