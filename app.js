const heading = React.createElement("h1", {
    id: "heading",
    xy: "abc"
}, "Hello World From React :) ");
console.log(heading);
// React element is an javascript object , not an h1 tag ,returns an object 
// {$$typeof: Symbol(react.element), type: 'h1', key: null, ref: null, props: {…}, …}
// $$typeof: Symbol(react.element)
// key: null
// props: children: "Hello World From React :) " 
// id: "heading"
// xy:"abc"
// [[Prototype]]: Object



// problem 2 - create siblings: -
//     <div id="parent">
//         <div id="child">
//             <h1>I'm h1 tag</h1>
//             <h2>I'm h2 tag</h2>
//         </div>
//     </div>
// sol - to make siblings in 3rd arg u have to pass 2 children in an array

const parent = React.createElement("div",{id:"parent"},
React.createElement("div",{id:"child"},[
    React.createElement("h1",{},"I'm an h1 tag"),
    React.createElement("h2",{},"I'm an h2 tag"),

]
)
)

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(parent);

// this render method converting this object to h1 tag and placing it in root node 