import React from 'react'

export default function Suggestions({data, handleClick}) {
  return (
    <ul className='list'>
      {
        data && data.length ? 
        data.map((item, index) => <li onClick={handleClick} key={index}>{item}</li>) : null
      }
    </ul>
  )
}
