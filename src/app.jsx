
import React from "react";
import ReactDOM from "react-dom/client";

import Restaurant from "./components/Restaurant";

import Home from "./components/Home";
import { BrowserRouter,Route,Routes } from "react-router";

function App(){
    return ( 
        <div>
         <BrowserRouter>
           <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/restaurant" element={<Restaurant></Restaurant>}></Route>
           </Routes>
         </BrowserRouter>
            
           

        </div>
    );
}

let RROOT=ReactDOM.createRoot(document.getElementById("root"));
RROOT.render(<App/>);