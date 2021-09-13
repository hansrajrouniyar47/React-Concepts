

import React from 'react'

function Namelist() {

  const names = [
    {
      id: 1,
      name: 'Hansraj'

    },
    {
      id: 2,
      name: 'Manish'
    },
    {
      id:3,
      name: 'Bishal'
    }
  ]

  return (
    <div>
      {
         names.map( name => <h2>I am {person.name} and my roll no is {person.id}</h2>)
      }
      {/* map method is a javascript method which needs to be evaluated and curly braces is a way to do that in jsx */}
    </div>
  )
}

export default Namelist





import React from 'react'

function Namelist() {

  const names = [
    {
      id: 1,
      name: 'Hansraj'

    },
    {
      id: 2,
      name: 'Manish'
    },
    {
      id:3,
      name: 'Bishal'
    }
  ]

  return (
    <div>
      {
         names.map( namess => <h2>I am {namess.name} and my roll no is {namess.id}</h2>)
      }
      {/* map method is a javascript method which needs to be evaluated and curly braces is a way to do that in jsx */}
    </div>
  )
}

export default Namelist

