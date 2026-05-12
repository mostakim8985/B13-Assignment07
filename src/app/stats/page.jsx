import PieChartWithPaddingAngle from '@/component/PIchart/Pichart';
import React from 'react';
import { GoDotFill } from 'react-icons/go';
import { PiChair } from 'react-icons/pi';

const page = () => {
    return (
        <div className='py-10 px-4 space-y-5 h-full container mx-auto md:my-20'>
            <p className='md:text-start text-center text-3xl md:text-5xl font-bold '>Friendship Analytics</p>
            <div className='bg-white p-4 space-y-4'>
                <p className='text-[16px] text-center md:text-start md:text-xl font-medium'>By Interaction Type</p>
                <div className='flex justify-center items-center'>
                    <PieChartWithPaddingAngle></PieChartWithPaddingAngle>
                </div>
                <div className='flex justify-center text-xl items-center space-x-3'>
                    <span className='flex justify-center items-center'><GoDotFill className='text-[#0088FE]' /> Call</span>
                    <span className='flex justify-center items-center'><GoDotFill className='text-[#00C49F]' /> Text</span>
                    <span className='flex justify-center items-center'><GoDotFill className='text-[#FFBB28]' /> Video</span>

                </div>
            </div>
        </div>
    );
};

export default page;