
//this keyword undefined instance occurs at react because this used with a function returns 'window' object on the browser and 'global' object inside nodejs environment. Since 'react strict mode' is enabled, it is returning 'undefined'.
//therefore we use eventbinding in react


//approach 1 i.e => binding in the render method

import React, { Component } from 'react'

export default class Welcome extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       message: 'Hello'
    }
  }

  changeMessage(){
    this.setState({
      message: 'Bye'
    })
  }
  

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.changeMessage.bind(this)}>Click Me</button>
       
      </div>
    )
  }
}


//approach 2 => arrow functions approach
// calling arrow functions 

<button onClick={ () => this.changeMessage()}>Click here</button>

//approach 3 => binding in the constructor only

this.changeMessage = this.changeMessage.bind(this)

//approach 4 => writing setstate wala function as an arrow function

changeMessage = () => {
  this.setState({
    message: 'Tata!'
  })
}

//thus with this when you call as
<button onClick={this.changeMessage}>Click Me!</button>

//it will work
