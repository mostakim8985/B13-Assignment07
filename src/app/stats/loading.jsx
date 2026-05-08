import React from 'react';
import { RotatingLines } from 'react-loader-spinner';

const Loading = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <RotatingLines></RotatingLines>
        </div>
    );
};

export default Loading;