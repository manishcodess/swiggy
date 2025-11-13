


import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Foodoptions from "./components/Foodoptions";
import Groceryoptions from "./components/Groceryoptions";

function App(){
    return (
        <div>
            <Header/>
            <Foodoptions/>
            <Groceryoptions/>

        </div>
    );
}

let RROOT=ReactDOM.createRoot(document.getElementById("root"));
RROOT.render(<App/>);