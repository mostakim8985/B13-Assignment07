"use client"
import React from 'react';
import { useButton } from '@/app/context/ButtonContext';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { MdOutlineMessage } from 'react-icons/md';



const TextButton = ({ user }) => {
    const { notify, setNotify } = useButton();

    const textHandleBUtton = (user) => {
        const newUser = {
            message: `${user.name}`,
            time: new Date().toLocaleTimeString(),
          
            type: 'text'
        }


        setNotify([...notify, newUser])
    }
    console.log(notify);
    return (

        <button onClick={() => { textHandleBUtton(user) }} className='btn text-xl py-10 w-full'>
            <MdOutlineMessage></MdOutlineMessage>
            Text
        </button>

    );
};

export default TextButton;