import React, { useContext, useState } from 'react'
import { MyContext } from '../Context/myContext'


function Login() {
    let { name, setName } = useContext(MyContext);
    let [tname, setTname] = useState('');

    let SUbmithandler = (e) => {
        e.preventDefault();
        setName(tname);
        setTname('');
    }
    return (
        <>
            <h1 className='w-full text-center p-3'>Welcome to Login Page {name}</h1>

            <form onSubmit={SUbmithandler} className='w-fit rounded-lg bg-black flex flex-col gap-2 items-center justify-normal p-4 rounded-none m-auto'>
                <input type="text" value={tname} onChange={(e) => { setTname(e.target.value) }} className='p-3 rounded-lg' />
                <button type='Submit' className='bg-white text-black rounded-xl p-2'>Submit</button>
            </form>

        </>
    )
}

export default Login
