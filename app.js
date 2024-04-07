import React from "react";
import ReactDOM from "react-dom/client";

// Nested Header using React.createElement
const nestedHeading = React.createElement("div", { className: "title" }, [
  React.createElement("h1", {}, "title1"),
  React.createElement("h2", {}, "title2"),
  React.createElement("h3", {}, "title3"),
]);

// Nested Header using JSX Elements
const nestedHeadingwithJsx = (
  <div class="title">
    <h1>title1</h1>
    <h2>title2</h2>
    <h3>title3</h3>
  </div>
);

const Title2 = () => <h2>title2</h2>;

// Nested Header using JSX Functions and component composition

//     {Title2}  -- this wont work but  {Title2()} will work
const NestedHeaderComponent = () => (
  <div className="title">
    <h1>title1</h1>
    <Title2 />
    {Title2()}
    {<Title2 />}
    {<Title2></Title2>}
  </div>
);

// Header with logo search bar icon and css

const Header = () => (
  <div className="header">
    <h2 className="logo">Nandini</h2>
    <h2 className="search">
      <input type="text" placeholder="Search here" />
      <button>
        <i className="fa fa-search"></i>
      </button>
    </h2>
    <h2 className="login">
      <i className="fa fa-fw fa-user"></i>
    </h2>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
