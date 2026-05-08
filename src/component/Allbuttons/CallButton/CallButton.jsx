"use client"
import { useButton } from '@/app/context/ButtonContext';
import React from 'react';
import { BiSolidPhoneCall } from 'react-icons/bi';




const CallButton = ({ user }) => {
    const { notify, setNotify } = useButton();
    const callButtonHandle = (user) => {

       const newUser = {
            message: `${user.name}`,
            time: new Date().toLocaleTimeString(),

            type: 'call'
        }


        setNotify([...notify, newUser])

    }

    return (
        <button onClick={() => { callButtonHandle(user) }} className='btn text-xl py-10 w-full'>
            <BiSolidPhoneCall></BiSolidPhoneCall>

            Call
        </button>

    );

};

export default CallButton;