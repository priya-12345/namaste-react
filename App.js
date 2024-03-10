import React from "react";
import ReactDOM from "react-dom/client";

//React
// const heading=React.createElement("h1",{id:"heading"},"Namaste React");
// const root=ReactDOM.createRoot(document.getElementById("Root"));
// root.render(heading);

//Using JSX-React Element
// const jsxHeading=<h1 id="heading">Namaste React using JSX</h1>;
// const root1=ReactDOM.createRoot(document.getElementById("Root"));
// root1.render(jsxHeading);

const title=<h2 id="heading">Namaste title</h2>;
const ImageComponent = () => (
    <div id="container">
        <h2>{title}</h2>
    <h1 id="heading">I am a Image Component</h1>
    </div>
    );
//React Component
const HeadingComponent = () => (
<div id="container">
    <h2>{title}</h2>
    <ImageComponent/>
<h1 id="heading">I am a Functional Component</h1>
</div>
);
const root2=ReactDOM.createRoot(document.getElementById("Root"));
root2.render(<HeadingComponent/>);


// const parent = React.createElement(
//     "div",
// {id:"parent"},[
//     React.createElement("div",{id:"child"},
//     [React.createElement(
//     "h1",{id:"headingid"},"I am a Priya tag"),
//     React.createElement(
//     "h2",{id:"headingid2"},"I am a h2 tag")]),
//     React.createElement("div",{id:"child2"},
//     [React.createElement(
//     "h1",{id:"headingid"},"I am a h1 tag"),
//     React.createElement(
//     "h2",{id:"headingid2"},"I am a h2 tag")])]);


// const heading = React.createElement("h1",{id:"heading",xyz:"abc"},"Hello World from React!");

// const root = ReactDOM.createRoot(document.getElementById("Root"));

// root.render(parent);