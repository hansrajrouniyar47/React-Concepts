//fragments let you group a list of children elements without  adding extra node to the DOM

import React from 'react'

function FragmentDemo() {
  return (
    <React.Fragment>
      <h1>Hansraj</h1>
      <p>We welcome you!</p>
    </React.Fragment>
  )
}

export default FragmentDemo

//You can also pass as <></> instead of <React.Fragment></React.Fragment> but it has limitation of not being able to pass with key attributes in it.

