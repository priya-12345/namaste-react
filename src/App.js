import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body.js";

//App Component
const AppLayout=()=>(
    <div className="app">
    <Header />
    <Body />
    </div>
);

const root=ReactDOM.createRoot(document.getElementById("Root"));
root.render(<AppLayout />);