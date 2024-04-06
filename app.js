import React from "react";
import ReactDOM from "react-dom/client";

// functional component  -- a normal js function which returns JSX element or react elements
// component name should starts with capital letters

// one way to create functional component
const HeadingFunction = () => {
  return <h1>Hiee</h1>;
};

// other way to create functional component
const OtherHeadingFunction = () => <h1>hello</h1>;

const Title = () => <h1> Title </h1>;

// Component in Component is component composition
const MainHeading = () => (
  <div>
    <Title />
    <h2>Component composition</h2>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// for rendering component need to specify in </>
root.render(<MainHeading />);
