import React, { Component } from 'react'

export class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       username: '',
       comments: '',
       selectelement: 'React'
    }
  }
  handleUsername = (event) => {
    this.setState({
      username: event.target.value
    })
  }
  handleComments = (event) => {
    this.setState({
      comments: event.target.value
    })
  }
  handleSelect = event => {
    this.setState({
      selectelement: event.target.value
    })
    
  }
  handleSubmit = event =>{
    alert(`${this.state.username} ${this.state.comments} ${this.state.selectelement}`)
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Username</label>
          <input type='text' value={this.state.username} onChange={this.handleUsername}></input>
        </div>
        <div>
          <label>Comments</label>
          <textarea value={this.state.comments} onChange={this.handleComments}></textarea>

        </div>
        <div>
          <select value={this.state.selectelement} onChange={this.handleSelect}>
              <option>React</option>
              <option>Angular</option>
              <option>Vue</option>
          </select>
        </div>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default Form


//Use the idea to destructure all of the form properties 
//like 
const {username,comments,selectelement} = this.state
//and use it between render and return