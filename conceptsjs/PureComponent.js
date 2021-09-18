//see once for implementation part
//while now let's understand the theory and concepts behind purecomponent

// We can create a component by extending the Pure Component class
// A pure component implements the shouldComponentUpdate lifecycle method by performing a shallow comparison on the props and state of the component
// If there is no difference, the component is not re-rendered and thus, there is performance boost
// It is a good idea to ensure that all the children components are also pure to avoid unexpected behaviour
// Never mutate the state.Always return a new object that reflects the new state

//What pure component is to regular component, memo is to functional component

