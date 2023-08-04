import React from 'react'
import { useLocation } from 'react-router-dom'

const Greet = () => {
    const location = useLocation();

    return (
    <div>
        <h1>Hello {location.state.name}</h1>
    </div>
  )
}

export default Greet