import React, { useContext } from 'react'
import { MyContext } from '../Context/myContext';





function Home() {

    let { name, setName } = useContext(MyContext);




    return (
        <>
            <h1 className='w-full text-center p-3'> !! Welcome to HOME page {name} {import.meta.env.VITE_KEY}</h1>
        </>
    )
}

export default Home
