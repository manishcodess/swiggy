
import React from "react";
import ReactDOM from "react-dom/client";

import Restaurantscards from "../srcmore/componentsmore/Restaurantscards";


import Home from "./components/Home";
import { BrowserRouter,Route,Routes } from "react-router";

function App(){
    return ( 
        <div>
         <BrowserRouter>
           <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/restaurant" element={<Restaurantscards/>}></Route>
           </Routes>
         </BrowserRouter>
            
           

        </div>
    );
}

let RROOT=ReactDOM.createRoot(document.getElementById("root"));
RROOT.render(<App/>);