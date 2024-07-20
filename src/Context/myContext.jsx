import React, { createContext, useState } from 'react';

// Create a Context
export const MyContext = createContext();

const MyProvider = ({ children }) => {
    const [name, setName] = useState('Kuldeep');

    return (
        <MyContext.Provider value={{ name, setName }}>
            {children}
        </MyContext.Provider>
    );
};

export default MyProvider;
