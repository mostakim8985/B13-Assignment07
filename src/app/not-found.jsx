import Image from 'next/image'
import React from 'react';


const NotFound = () => {
    return (
        <div className='flex bg-[#222e3a] text-white justify-center w-screen items-center h-screen'>
            <div className='flex sm:flex-row flex-col justify-center items-center sm:gap-10'>
                <h3 className='text-8xl flex items-center justify-center font-bold sm:border sm:border-l-0 sm:border-t-0 sm:border-b-0 h-40 sm:h-80 sm:border-r-3 px-5'>404</h3>
                <div className='flex flex-col items-center gap-3 justify-center'>
                    <Image
                        src="/wifi-cut.jpg"
                        alt="Picture of the author"
                        width={150}
                        height={150}
                    />
                    <p className='text-4xl capitalize font-semibold'>page not found</p>
                </div>

            </div>
        </div>
    );
};

export default NotFound;