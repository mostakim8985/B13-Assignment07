"use client"
import { useButton } from '@/app/context/ButtonContext';
import React from 'react';
import TimelineUsers from './TimelineUsers';

const TimelineData = () => {
    const { notify, button } = useButton();
    const users = notify;

    return (
        <div className='space-y-7'>
            <div className='space-y-6'>
                <h2 className='text-5xl font-bold'>Timeline</h2>
                <div>
                    <select defaultValue="Filter timeline" className="select">
                        <option>All</option>
                        <option>Call</option>
                        <option>Text</option>
                        <option>Video</option>
                    </select>
                </div>
            </div>
            <div className='space-y-5'>
                {
                    users.map((user, index) => <TimelineUsers button={button} key={index} user={user}></TimelineUsers>)
                }
            </div>
        </div>
    );
};

export default TimelineData;