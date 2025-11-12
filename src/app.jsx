


import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Foodoptions from "./components/Foodoptions";

function App(){
    return (
        <div>
            <Header/>
            <Foodoptions/>

        </div>
    );
}

let RROOT=ReactDOM.createRoot(document.getElementById("root"));
RROOT.render(<App/>);