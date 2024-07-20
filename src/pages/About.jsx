import React, { useContext } from 'react'
import { MyContext } from '../Context/myContext'


function About() {
    let { name, setName } = useContext(MyContext);
    return (
        <>
            <h1 className='w-full text-center p-3'>Welcome to About Page {name}</h1>
        </>
    )
}

export default About
