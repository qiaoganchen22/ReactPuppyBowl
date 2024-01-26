import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PlayerDetails from "./components/PlayerDetails.jsx";
import Forms from "./components/Forms.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/player/:id" element={<PlayerDetails />}></Route>
          <Route path="/forms" element={<Forms />}></Route>
        </Routes>
      </Router>
    </React.StrictMode>
  </Provider>
);
