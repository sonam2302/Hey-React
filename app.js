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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
// this render method converting this object to h1 tag and placing it in root node 