import React from "react";
import ReactDOM from "react-dom/client";

import Restaurantscards from "../srcmore/componentsmore/Restaurantscards";
import RestaurantMenu from "../srcpizza/Componentspizza/RestaurantMenu";

import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter, Route, Routes } from "react-router";

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="/restaurant"
              element={
                <ProtectedRoute>
                  <Restaurantscards />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/city/delhi/:id"
              element={
                <ProtectedRoute>
                  <RestaurantMenu></RestaurantMenu>
                </ProtectedRoute>
              }
            ></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

let RROOT = ReactDOM.createRoot(document.getElementById("root"));
RROOT.render(<App />);
