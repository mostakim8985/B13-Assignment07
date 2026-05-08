"use client"
import { useButton } from '@/app/context/ButtonContext';
import React from 'react';
import { IoMdVideocam } from 'react-icons/io';



const VideoButton = ({ user }) => {
    const { notify, setNotify } = useButton();
    const videButtonHandle = (user) => {
      const newUser = {
            message: `${user.name}`,
            time: new Date().toLocaleTimeString(),
            type: 'video'
        }


        setNotify([...notify, newUser])
    }
    return (
        <div>
            <button onClick={() => { videButtonHandle(user) }} className='btn text-xl py-10 w-full'>
                <IoMdVideocam></IoMdVideocam>
                Video
            </button>
        </div>
    );
};

export default VideoButton;