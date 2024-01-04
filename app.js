import React from 'react';
import ReactDOM from 'react-dom/client';


const heading = React.createElement("h1", {
    id: "heading",
    xy: "abc"
}, "Hello World From React :) ");
console.log(heading);

//jsx - is not HTML in js , its HTML/XML like syntax 
// when this piece of code is executed , babel (which is a transpiler which comes with parcel) transpiles the 
// jsx to code that browser will understand 

const jsxHeading = <h1 id= "heading" xy="abc">Hey React using JSX</h1>
console.log(jsxHeading); // same o/p as heading 
//babel is converting jsx code to react element which is a javascript object , render convert into html 
//BABEL is some js code which also coverts ES6 Code to the code which browser understands
//JSX => REACT CREATE ELEMENT => REACT ELEMENT- JS OBJECT => HTML ELEMENT
//JSX => Attribute should be in camelcase unlike html- all are in lower case  
//JSX => multiple lines - wrap with paranthesis ()
const jsxMultiLine = (
    <h1 className ="head" tabIndex="5">Hey JSX</h1>
)


const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(jsxMultiLine); 


// this render method converting this object to h1 tag and placing it in root node 