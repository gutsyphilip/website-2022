import React from 'react'
import Navbar from '../Navbar'

import insigniaUrl from '~/assets/svgs/insignia.svg';


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
    name: 'philip.c.obosi@gmail.com',
    url: 'mailto:philip.c.obosi@gmail.com',
  },
]


const Layout: React.FC = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />

      <div className="layout_main">
        <aside>

        </aside>
        <div className="">
          {children}
        </div>
      </div>
      <footer className="layout_footer">
        <img className='layout_footer_insignia' src={insigniaUrl} />
        <div className="layout_footer_links">
          <h6>FIND ME:</h6>
          <div>
            {LINKS.map(({ name, url }) => {
              return <a target="_blank" href={url}>{name}</a>
            })}
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
