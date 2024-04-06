import React from "react";
import ReactDOM from "react-dom/client";

// createElement will give a JS object
const heading = React.createElement("h1", { id: "head" }, "Learning React");

//jsx will be html like code but not html ( it will be an js object at the end )
//jsx will convert to React.createElement using babel transpilation 
const jsxheading = (<h1 className="head">
    Learning React using JSX
    </h1>)

const imgTag = <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fbuffer.com%2Flibrary%2Ffree-images%2F&psig=AOvVaw0VJvFoBTrg66LSJK6BxUcJ&ust=1712516703967000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMiYh4mkroUDFQAAAAAdAAAAABAJ" alt="image"/>
const aTag = <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script">click me</a>
const root = ReactDOM.createRoot(document.getElementById("root"));
// once we render the object will be converted to a html tag
root.render(jsxheading);