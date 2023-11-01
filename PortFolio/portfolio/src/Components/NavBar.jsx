import React from 'react'

export const NavBar = () => {
  return (
    <nav className='flex justify-around mb-32'>
        <div className='-ml-72'>
            Omar Sampayo
        </div>
        <ul className='flex'>
            <li className='mr-4'>Home</li>
            <li className='mr-4'>My Exterprise</li>
            <li className='mr-4'>Experience</li>
            <li className='mr-4'>Contact Me</li>
        </ul>
    </nav>
  )
}
