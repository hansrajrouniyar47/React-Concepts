
// static getDerivedStateFromProps(props,state)
// -method is called every time a component is re-rendered
// -set the state
// -do not causes side effects 

// shouldComponentUpdate(nextProps,nextState)
// -dictates if the component should re-render or not
// -is for performance optimization
// -do not cause side effects e.g HTTPS

// render() method
// -only required method in class component
// -read props & state and returns jsx
// -do not change state or interact with DOM or make ajax calls
// -children component lifecycle methods are also executed

// getsnapshotBeforeUpdate(prevProps,prevState)
// -called right before the changes from the virtual DOM are to be reflected in the DOM
// -capture some information from the DOM
// -method will either return null or return a value.
// Returned value will be passed as the third parameter to the next method

// componentDidUpdate(prevProps,prevState,snapshot)
// -called after the render is finished in the re-render cycles
// -this method accepts three parameter
// -cause side effects
// -is called only once after the method is re rendered




