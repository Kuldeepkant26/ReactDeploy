import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='w-full bg-black text-white flex justify-between p-4 items-center'>
            <h2>LOGO</h2>
            <div className='flex gap-3'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/login' >Login</Link>
            </div>
        </div>
    )
}

export default Navbar
