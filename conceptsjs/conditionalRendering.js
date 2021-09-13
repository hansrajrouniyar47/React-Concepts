
//conditional rendering works in react in same way as conditions work in javascripts.
// 4 ways of conditional rendering are there
//   1. if else
//   2. element variables
//   3. ternary conditional operators
//   4. short circuit operator


import React, { Component } from 'react'

export class UserGreeting extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedin: true
    }
  }
  
  render() {
    // Default Way
    // return (
    //   <div>
        
    //   </div>
    // )

    //Using if else directly i.e approach 1
    // if(this.state.isLoggedin){
    //   return(
    //     <div>
    //       Welcome Hansraj
    //     </div>
    //   )
    // }
    // else{
    //   return(
    //     <div>
    //       Welcome Guest
    //     </div>
    //   )
    // }

    //Using Conditional Variable i.e approach 2
    // let message
    // if(this.state.isLoggedin){
    //   message = <div>Hello Manish</div>
    // }
    // else{
    //   message = <div>Hello Guest</div>
    // }
    // return <div>{message}</div>

    //Using ternary operator i.e approach 3
    // return(
    //   this.state.isLoggedin ? (
    //     <div>Welcome Bishal</div>
    //   ) : (
    //     <div>Welcome Guest</div>
    //   )

    // )

    //shortcircuit operator i.e approach 4
    return this.state.isLoggedin && <div>WelCoMe Hansraj</div>


  }
}

export default UserGreeting
