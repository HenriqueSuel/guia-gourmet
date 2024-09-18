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
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDvZUCrIXgRiGh75cqppAdD1tCtv8tyF74",
  authDomain: "guia-gourmet-bde0c.firebaseapp.com",
  projectId: "guia-gourmet-bde0c",
  storageBucket: "guia-gourmet-bde0c.appspot.com",
  messagingSenderId: "489261467391",
  appId: "1:489261467391:web:9e2c06358ec668c440eeca",
};

initializeApp(firebaseConfig);

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
