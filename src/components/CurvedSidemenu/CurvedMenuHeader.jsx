import React from 'react'

export default function CurvedMenuHeader({ active, setActive }) {
  return (
    <header className='curved-sidemenu-header'>
      <button
        onClick={() => setActive(!active)}
        className={`${active ? "active" : ""}`}
      ></button>
    </header>
  )
}
