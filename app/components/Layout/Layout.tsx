import React from 'react'
import Navbar from '../Navbar'

import insigniaUrl from '../../assets/svgs/insignia.svg'


const LINKS: Array<{ name: string; url: string }> = [
  {
    name: 'Twitter',
    url: 'https://twitter.com/gutsyphilip',
  },
  {
    name: 'Youtube',
    url: 'https://www.youtube.com/PhilipObosi',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/gutsyphilip/',
  },
  {
    name:'LinkedIn',
    url:'https://www.linkedin.com/in/philip-obosi'
  },
  {
    name: 'philip.c.obosi@gmail.com',
    url: 'mailto:philip.c.obosi@gmail.com',
  },
]


const Layout: React.FC = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <div className="layout_main">
          {children}
      </div>
      <footer className="layout_footer">
        <img className='layout_footer_insignia' src={insigniaUrl} />
        <div className="layout_footer_links">
          <h6>FIND ME:</h6>
          <br/>
          <div>
            {LINKS.map(({ name, url }) => {
              return <a target="_blank" href={url} key={name}>{name}</a>
            })}
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
