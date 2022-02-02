import React from 'react'
import { Link } from 'remix'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link className='navbar_section' to="/">
        <div className="navbar_logo"> ← &nbsp; philipobosi.com</div>
      </Link>
    </nav>
  )
}

export default Navbar
