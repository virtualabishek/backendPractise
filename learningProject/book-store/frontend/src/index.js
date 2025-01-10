import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import AddBook from "./pages/AddBook.js";
import Dashboard from "./pages/Dashboard.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard">
        <Route index element={<Dashboard />} />
        <Route path="addBook" element={<AddBook />}></Route>
      </Route>
    </Routes>
  </Router>
);
