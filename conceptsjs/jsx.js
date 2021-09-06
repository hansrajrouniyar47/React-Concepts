//JSX which is JavaScript XML is an extension to the Javascript language syntax
//with it, we can use react to write XML like code for elements and Components 

//JSX tags have a tag name, attributes and children though it is not necessarily important to write react applications but with jsx we can write simpler and elegant code
//and it ultimately transpiles to pure Javascript which is understood by the browser

//jsx has this limitation of returning only one html element so if you are there passing some more elements then you have to return those inside one wrapper element
//like if you have h1 tag as <h1>Hello {props.name}</h1>
//followed by <p>{props.children}</p> tag
//what you can do is return these two under a div tag