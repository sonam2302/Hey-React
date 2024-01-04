import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const jsxHeading = (
  <h1 id="heading" xy="abc">
    Hey React using JSX
  </h1>
);
const oneele = (

    <h1 >
            {jsxHeading}
hurray</h1>
);

const Title = () => (
  <h1 className="head" tabIndex="4">
    hello to react using title Component
  </h1>
);

//Functional Component - should be in capital  - its a fn that returns a jsx code or react elem

//with arrow fn we can use return or not but with normal fn we should use return keyword
// const fn = () => true; //both are same
// const fn1 = () => {
//     return true;
// }
// const HeadingComponent2 = () => {
//     return <h1>Hey React Functional Component</h1>
// }
const data = 1000; // suppose this data is coming from api like const data = api.getData();
//what if api sends mallicious data , attacker can run js code into end user browser this type 
// of attack called cross - site scripting - attacker can send some data  and execute in end user browser
// -> can read cookies , session storage , all info about laptop but JSX CAN TAKES CARES OF THIS ATTACK , IF API IS 
// MALLICIOUS , JSX WILL ESCAPE IT - INSIDE CURLY BRACES , IT SANITIZES THE DATA -IT PREVENTS CROSS SITE SCRIPTING 
// AUTOMATICALLY HANDLE BY REACT
//WE CAN RENDER COMPONENT INSIDE COMPONENT , ELEMENT INSIDE ELEMENT , COMPONENT INSIDE ELEMENT 
const HeadingComponent = () => (
  <div id="container">
     {/* // by putting comp inside comp called component composition */}
     <Title/>
     {/* <Title></Title> // we can render title comp like this as well */}
     {/* {Title()} we can render title comp like fn as well as its a normal js fn  */}
     {/* TO Render any js code inside jsx , we need to wrap it with curly braces  */}
     {4*5}
     {data}
     {oneele}
    <h1 className="heading">H ey React Fn Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
//root.render(jsxHeading); // to render element we pass it like this

root.render(<HeadingComponent />); // to render compnent we pass it with brackets s

// this render method converting this object to h1 tag and placing it in root node
