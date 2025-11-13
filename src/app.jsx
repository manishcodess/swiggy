


import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Foodoptions from "./components/Foodoptions";
import Groceryoptions from "./components/Groceryoptions";
import DineOption from "./components/DineOption";


function App(){
    return (
        <div>
            <Header/>
            <Foodoptions/>
            <Groceryoptions/>
            <DineOption/>

        </div>
    );
}

let RROOT=ReactDOM.createRoot(document.getElementById("root"));
RROOT.render(<App/>);