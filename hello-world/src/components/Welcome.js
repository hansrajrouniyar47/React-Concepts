

// whenever you want to call or see for values after changing their setstate , do not call it outside, call it as callback function 
// codevolution reactjs tutorial 11 set state : 9:00-9:45

//always make use of setState and never modify the state directly
//code has to be executed after the state has been updated? Place that code in the call back function which is the second argument to the setState method
//When you have to update the state based on the previous state value, pass in a function as an argument instead of regular object

import React, { Component } from 'react'

class Welcome extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       count : 0
    }
  }
  increment() {
    this.setState({
      count: this.state.count+1
    })
    console.log(this.state.count)
  }
  
  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <button onClick={() => this.increment()}>Increment</button>
        
        
      </div>
    )
  }
}

export default Welcome
