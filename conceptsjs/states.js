import React, { Component } from 'react'

export default class states extends Component {

  constructor(){
    super()
    this.state = {
      message: 'Welcome Man!'
    }
  }

  changeMessage() {
    this.setState({
      message: 'Thank You for Visiting!'
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>VISIT</button>
      </div>
    )
  }
}
