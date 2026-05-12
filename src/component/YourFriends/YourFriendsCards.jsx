import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const YourFriendsCards = ({ items }) => {

    return (


        <Link className='hover-3d' href={`/friends/${items.id}`}>
            <div className='flex flex-col items-center justify-center shadow-md py-5 space-y-2'>
                <div className='bg-cover rounded-full h-25 w-25 flex justify-center items-center overflow-hidden'>

                    <Image
                        src={`${items.picture}`}
                        alt="Picture of the author"
                        width={100}
                        height={100}
                        className=''
                    />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3 className='text-xl font-semibold'>{items.name}</h3>
                    <span className='text-[12px] font-medium text-gray-400'>{items.days_since_contact}d ago</span>
                    <div className='space-x-2'>
                        <span className='badge capitalize text-[14px] font-semibold badge-error my-2'>{items.tags[1]}</span>
                        
                    </div>
                    <span className={`badge text-[14px] capitalize font-semibold ${items.status === 'overdue' ? 'badge-info' : items.status === 'on-track' ? 'badge-secondary' : items.status === 'almost due' ? 'badge-primary' : ''}`}>{items.status}</span>

                </div>

            </div>
        </Link>


    );
};

export default YourFriendsCards;