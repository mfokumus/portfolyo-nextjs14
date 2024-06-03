import React from 'react'
import NavItem from './NavItem'

interface MobileMenuProps{
    links:[],
}

const MobileMenu = ({links}:MobileMenuProps) => {
  return (
    <ul className='flex flex-col py-4 items-center md:hidden'>
        {links.map((link,i) => (
            <li key={i}>
                <NavItem href={link.path} title={link.title}/>
            </li>
        ))}
    </ul>
  )
}

export default MobileMenu