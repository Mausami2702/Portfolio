// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';  // use relative path
import App from './App'; // use relative path

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
