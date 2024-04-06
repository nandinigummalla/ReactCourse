import React from "react";
import ReactDOM from "react-dom/client";

// createElement will give a JS object
const heading = React.createElement("h1", { id: "head" }, "Learning React");
const root = ReactDOM.createRoot(document.getElementById("root"));
// once we render the object will be converted to a html tag
root.render(heading);