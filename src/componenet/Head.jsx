import React from 'react'
import { NavLink } from 'react-router-dom'

function Head() {
  return (
<>
<header>

  <h1>MY RECORDS</h1>
  <nav>
        <NavLink to='/'>HOME</NavLink>
        <NavLink to='/insert'>INSERT</NavLink>
        </nav>
    </header>
</>
  )
}

export default Head