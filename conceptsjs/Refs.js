//Refs makes possible to access DOM nodes directly in react


import React, { Component } from 'react'

class RefsDemo extends Component {

  constructor(props) {
    super(props)
  
    this.inputRef = React.createRef()

  }

  componentDidMount() {
    this.inputRef.current.focus()
    console.log(this.inputRef)
  }
  

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef}></input>
      </div>
    )
  }
}

export default RefsDemo

//You also have another method of using refs,
//i.e with using of callback refs



