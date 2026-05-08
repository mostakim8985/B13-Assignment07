"use client"

import React, { createContext, useContext, useState } from 'react';

const ButtonContext = createContext();

export const ButtonProvider = ({ children }) => {
    const [notify, setNotify] = useState([]);
    

    return (
        <ButtonContext.Provider value={{ notify, setNotify }}>
            {children}
        </ButtonContext.Provider>
    );
};

export const useButton = () => useContext(ButtonContext);