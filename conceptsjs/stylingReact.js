import React from 'react'
import './mystylesheet.css'

// function StyleSheet(props) {
//   let className = props.primary ? 'primary' : 'secondary'
//   return (
//     <div>
//       <h1 className={className}>Hello</h1>
//     </div>
//   )
// }



// below explains for getting multiple css

// import React from 'react'
// import './mystylesheet.css'

function StyleSheet(props) {
  let className = props.primary ? 'primary' : 'secondary'
  return (
    <div>
      <h1 className={`${className} fontsizec`}>Hello</h1>
    </div>
  )
}


export default StyleSheet

//for inline styling, the styling is done as key-value pair for which key is the
//camelCase style property and value passed as the value of string
e . g
const heading = {
  fontSize: '72px',
  backgroundColor: 'blue'
}

//then include that as style property
<h1 style={heading}>inline</h1>


