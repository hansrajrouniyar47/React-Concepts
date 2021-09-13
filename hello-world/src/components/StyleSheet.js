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



