"use client";


import TimelineData from '@/component/TimelineData/TimelineData';
import React from 'react';
import { BiSolidPhoneCall } from 'react-icons/bi';



const Timeline = () => {
   
    return (
        <div className='container space-y-6 h-screen border border-gray-300 rounded-md p-4 bg-base-200 mx-auto my-20'>
           
           <TimelineData></TimelineData>
            
        </div>
    );
};

export default Timeline;