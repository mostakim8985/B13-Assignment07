import React from 'react';
import Image from 'next/image';

const YourFriendsCards = ({items}) => {
    console.log(items.name)
    return (
        <div>
            <div className='flex flex-col items-center justify-center shadow-md py-5 space-y-2'>
                    <Image className='rounded-full'
                        src="/wifi-cut.jpg"
                        alt="Picture of the author"
                        width={80}
                        height={80}
                    />
                    <div className='flex flex-col items-center justify-center'>
                        <h3 className='text-xl font-semibold'>{items.name}</h3>
                        <span className='text-[12px] font-medium text-gray-400'>days</span>
                        <span className='badge text-[14px] font-semibold badge-error my-2'>Job status</span>
                        <span className='badge text-[14px] font-semibold badge-info'>Status</span>

                    </div>

                </div>
        </div>
    );
};

export default YourFriendsCards;