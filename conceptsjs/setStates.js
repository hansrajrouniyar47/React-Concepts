

// whenever you want to call or see for values after changing their setstate , do not call it outside, call it as callback function 
// codevolution reactjs tutorial 11 set state : 9:00-9:45

//always make use of setState and never modify the state directly
//code has to be executed after the state has been updated? Place that code in the call back function which is the second argument to the setState method
//When you have to update the state based on the previous state value, pass in a function as an argument instead of regular object



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
    this.state.count = this.state.count + 1
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

//In the above example, the increment wherein the counter has to increase does increases the counter but that doesn't get render in the button because for rendering it, we need to use setState method rather than directly trying to change and wait for rendering.

//While changing the above increment function as below, i.e using setState
//the change appears on the screen as well

increment(){
  this.setState({
    count: this.state.count+1
  })
  console.log(this.state.count)
}

//Things to still look at => 1/ how callback value is attached along with setState as second parameter, 
          //                  2/ how to use prevState as argument for better updation of the state method's value




