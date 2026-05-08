import React from 'react';
import { FaVideo } from 'react-icons/fa';
import { FaMessage } from 'react-icons/fa6';
import { IoCall } from 'react-icons/io5';

const TimelineUsers = ({ user }) => {

    return (
        <div className='bg-white p-4 rounded-2xl'>
            <div className='flex items-center gap-4'>
                <div className='text-4xl'>

                    {
                        user.type === 'call' ? <IoCall></IoCall> : user.type === 'text' ? <FaMessage></FaMessage> : <FaVideo></FaVideo>
                    }
                </div>
                <div>

                <p className='text-xl font-semibold capitalize'>{user.type} <span className='text-[16px] font-normal'>with {user.message}</span></p>
                <p>{user.time}</p>
                </div>

            </div>
        </div>
    );
};

export default TimelineUsers;