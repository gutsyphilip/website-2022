import React from 'react'
import { Link } from 'remix'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link className='navbar_logo' to="/">
        <div>PHILIP OBOSI</div>
      </Link>
      <div>Menu</div>
    </nav>
  )
}

export default Navbar
