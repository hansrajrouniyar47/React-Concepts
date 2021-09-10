//Destructuring functional Components

const Greet = props => {
  return(
    <div>
      Hello {props.name} a.k.a {props.heroName}
    </div>
  )
}

//The same props can be destructured as:

const Greet = ({name,heroName}) => {
  return(
    <div>
      Hello {name} a.k.a {heroName}
    </div>
  )
}

//Or can be destructured as:

const Greet = props => {
  const {name,heroName} = props
  return(
    <div>
      Hello {props.name} a.k.a {props.heroName}
    </div>
  )
}



//Destructuring in class components

class Welcome extends Component {
  render(){
    return (
      <h1>Welcome {this.props.name} a.k.a {this.props.heroName}</h1>
    )
  }
}

//We destructure it after the render method

class Welcome extends Component {
  render(){
    const {name,heroName} = props
    return (
      <h1>Welcome {name} a.k.a {heroName}</h1>
    )
  }
}

// Similarly for destructuring state, we follow the similar approach

i.e 
const {state1,state2} = this.state

