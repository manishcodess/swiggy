import React from "react";
import ReactDOM from "react-dom/client";

import Restaurantscards from "../srcmore/componentsmore/Restaurantscards";
import RestaurantMenu from "../srcpizza/Componentspizza/RestaurantMenu";

import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { BrowserRouter, Route, Routes } from "react-router";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/restaurant" element={<Restaurantscards />}></Route>
          <Route
            path="/city/delhi/:id"
            element={<RestaurantMenu></RestaurantMenu>}
          ></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

let RROOT = ReactDOM.createRoot(document.getElementById("root"));
RROOT.render(<App />);
