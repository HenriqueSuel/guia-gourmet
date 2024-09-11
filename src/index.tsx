import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Details from "./pages/details";
import { RestaurantProvider } from "./context/restaurant.context";
import { Loading } from "./components/loading";
import Forms from "./pages/forms";
import { LoadingProvider } from "./context/loading.context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <LoadingProvider>
      <RestaurantProvider>
        <Loading />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:id" element={<Home />} />
          <Route path="/restaurant/:id" element={<Details />} />
          <Route path="/forms" element={<Forms />} />
        </Routes>
      </RestaurantProvider>
    </LoadingProvider>
  </BrowserRouter>
);
