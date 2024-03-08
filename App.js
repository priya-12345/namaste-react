const parent = React.createElement(
    "div",
{id:"parent"},[
    React.createElement("div",{id:"child"},
    [React.createElement(
    "h1",{id:"headingid"},"I am a h1 tag"),
    React.createElement(
    "h2",{id:"headingid2"},"I am a h2 tag")]),
    React.createElement("div",{id:"child2"},
    [React.createElement(
    "h1",{id:"headingid"},"I am a h1 tag"),
    React.createElement(
    "h2",{id:"headingid2"},"I am a h2 tag")])]);


const heading = React.createElement("h1",{id:"heading",xyz:"abc"},"Hello World from React!");

const root = ReactDOM.createRoot(document.getElementById("Root"));

root.render(parent);