import React, { Component } from 'react'

export default class Welcome extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       message: 'Hello'
    }
  }

  // changeMessage(){
  //   this.setState({
  //     message: 'Bye'
  //   })
  // }
  
  changeMessage = () => {
    this.setState({
      message: 'Tata!'
    })
  }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.changeMessage}>Click Me</button>
        
      </div>
    )
  }
}
