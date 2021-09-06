// for example we ususally have five components in a single page application though that can vary with needs viz Headers, sidenav, main SVGTextContentElement, footer and root which is app component

//components are reusable and same components can be used with different properties to display different information
//e.g sidenav component can be left sidenav or right sidenav

//a component code is placed in a javascript file e.g appcomponent in app.js file

//basically there are two types of components in react, 
//one being stateless functional component which is more like of javascript function 
function Welcome(props){
  return `<h1>Hello ${props.name}</h1>`;
}

//the other being stateful class component
//which is like es6 classes
//here class extendsthe component class of react
//render method returning HTML

class Welcome extends React.Component{
  render(){
    return <h1>Hello,{this.props.name}</h1>;
  }
}

//Summary 
//Components describe a part of the user interface
//They are re-usable and can be nested inside other components
//Two types
//stateless functional components
//stateful class components


