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
// we can call a functioncomponent as a normal function also
// all 3 calling of title are same
const MainHeading = () => (
  <div>
    {Title()}
    <Title />
    <Title></Title>
    <h2>Component composition</h2>
  </div>
);

// React element in react element
const headElement = <h1>Hello I am react element</h1>;
const mainHead = (
  <div>
    Hie I aam MainHeading
    {headElement}
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
// for rendering component need to specify in </>
root.render(<MainHeading />);
