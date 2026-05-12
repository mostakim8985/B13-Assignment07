"use client"
import { useButton } from '@/app/context/ButtonContext';
import React, { useState } from 'react';
import TimelineUsers from './TimelineUsers';

const TimelineData = () => {
    const { notify, button } = useButton();


    const [filterDatas, setFilter] = useState('all')
    const filterData = filterDatas === 'all' ? notify : notify.filter(item => item.type === filterDatas);
    const users = filterData;
    return (
        <div className='space-y-7'>
            <div className='space-y-6'>
                <h2 className='text-5xl font-bold'>Timeline</h2>
                <div>
                    <select value={filterDatas} onChange={(events) => setFilter(events.target.value)} className="select">
                        <option value='all'>All</option>
                        <option value='call'>Call</option>
                        <option value='text'>Text</option>
                        <option value='video'>Video</option>
                    </select>
                </div>
            </div>
            <div>
                {
                    users.length === 0 ? <div className='flex p-4 justify-center items-center'><p className='text-5xl capitalize text-gray-600 font-bold'>No data found</p></div> :
                        <div className='space-y-5'>

                            {
                                users.map((user, index) => <TimelineUsers button={button} key={index} user={user}></TimelineUsers>)
                            }
                        </div>
                }



            </div>
        </div>
    );
};

export default TimelineData;