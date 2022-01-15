import React from 'react'

const Hero: React.FC = ({ children }) => {
  return (
    <header className='hero'>
      {children}
    </header>
  )
}

export default Hero
