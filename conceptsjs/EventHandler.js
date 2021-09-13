//function Event Handler


import React from 'react'

function EventHandler() {

  function clickHandler() {
    console.log('Button Clicked')
  }

  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default EventHandler

// The function shouldn't be called with a paranthesis on onClick attribute.

//Class Event Handler

import React, { Component } from 'react'

export class EventHandler extends Component {
  
  clickHandler(){
    console.log("clicked the button")
  }
  
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default EventHandler






// Not sure but according to one of the previous example done in classComponent fucntional component, if arrow function is there at the time of onclick event directly, parantheses come along

//else if it is being called without arrow function, there is no need of parantheses

