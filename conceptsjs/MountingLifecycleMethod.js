// Here we understand 
// Mounting Lifecycle Methods

// constructor(props) 
// -A special function that will get called whenever a new component is created
// -initializing the state
// -do not cause side effects e.g HTTP requests
// -super(props)
// -directly overwrite this.state

// static getDerivedStateFromProps(props,state)
// -rarely used method of lifecycle Methods
// -is used when the state of the component depends on changes in props over time
// -set the state
// -since the  method is static method, you do not have access to this keyword so you cannot call this.state within this particular method
// -do not cause side effects e.g HTTP requests

// render method
// -only required method in class component
// -read props & state and returns jsx
// -do not change state or interact with DOM or make ajax calls
// -children component lifecycle methods are also executed

// componentDidMount()
// -method called only once and is invoked immediately after a component and all its children components have been rendered to the DOM
// -is perfect method to cause side effects, you can interact with DOM or perform ajax calls to load the data




