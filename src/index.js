import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./app/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <footer className='footer'>
        Crafted by-<h5>Sushil Singh</h5>
      </footer>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

