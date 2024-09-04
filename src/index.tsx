import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Details from "./pages/details";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category/:id" element={<Home />} />
      <Route path="/restaurant/:id" element={<Details />} />
    </Routes>
  </BrowserRouter>
);
