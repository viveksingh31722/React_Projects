import React from 'react'
import MenuList from './menu-list'


export default function TreeView({menus = []}) {
  return (
    <ul className="menu-list-container">
      <MenuList list={menus}/>  
      {/* passing the props as menus */}
    </ul>
  )
}
