import React from 'react';
import Image from 'next/image';

import { BiSolidPhoneCall } from 'react-icons/bi';
import { MdOutlineMessage } from 'react-icons/md';
import { IoMdVideocam } from 'react-icons/io';
import { RiDeleteBin4Fill, RiNotificationSnoozeLine } from 'react-icons/ri';
import { FaArchive, FaHistory } from 'react-icons/fa';
import CallButton from '@/component/Allbuttons/CallButton/CallButton';
import TextButton from '@/component/Allbuttons/TextButton/TextButton';
import VideoButton from '@/component/Allbuttons/VideoButton/VideoButton';


const page = async ({ params }) => {
    const { id } = await params;
    const res = await fetch('http://localhost:3000/data.json');
    const allUsers = await res.json();

    const user = allUsers.find((users) => users.id === parseInt(id));



    return (
        <div className='flex flex-col sm:px-4 md:px-6 container gap-20 justify-center items-start md:items-center  my-20 mx-auto'>
            <div className='flex space-y-10 flex-col justify-center items-center'>
                <div className="card bg-white w-full shadow-sm">
                    <figure className="px-10 pt-10">
                        <div className='bg-cover rounded-full h-25 w-25 flex justify-center items-center overflow-hidden'>

                            <Image
                                src={`${user.picture}`}
                                alt="Picture of the author"
                                width={100}
                                height={100}
                                className=''
                            />
                        </div>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{user.name}</h2>

                        <div className="card-actions flex justify-center items-center flex-col ">
                            <span className={`badge text-[14px] capitalize font-semibold ${user.status === 'overdue' ? 'badge-info' : user.status === 'on-track' ? 'badge-secondary' : user.status === 'almost due' ? 'badge-primary' : ''}`}>{user.status}</span>
                            <span className='badge font-medium badge-accent'>{user.tags[0]}</span>
                        </div>
                        <p className='font-medium text-[16px] text-gray-500'>"{user.bio}"</p>
                        <p className='font-medium text-gray-500'><span className='text-[15px] text-gray-700'>Preferred: </span>{user.email}</p>
                    </div>
                </div>
                <div className='space-y-4'>
                    <div className='bg-white rounded-md shadow-md py-8 btn text-[16px] text-gray-700 font-bold w-full'><RiNotificationSnoozeLine className='text-xl font-bold' /> Snooze 2 Weeks</div>
                    <div className='bg-white shadow-md py-8 rounded-md btn text-[16px] text-gray-700 font-bold w-full'><FaArchive className='text-xl font-bold' /> Archive</div>
                    <div className='bg-white shadow-md py-8 rounded-md btn text-red-700 text-[16px] font-bold w-full'><RiDeleteBin4Fill className='text-xl font-bold' /> Delete</div>
                </div>
            </div>
            <div className='space-y-5'>
                <div className='flex md:hidden justify-between gap-6 sm:gap-4 items-center'>
                    <div className='text-center flex shadow-md rounded-md flex-col bg-white p-4'>
                        <span className='sm:text-3xl text-gray-600 text-xl font-bold'>{user.days_since_contact}</span>
                        <span className='sm:text-[18px] capitalize font-semibold text-[16px] text-gray-500'>days since contact</span>
                    </div>
                    <div className='text-center rounded-md flex shadow-md flex-col bg-white p-4'>
                        <span className='sm:text-3xl text-gray-600 text-xl font-bold'>30</span>
                        <span className='sm:text-[18px] capitalize font-semibold text-[16px] text-gray-500'>Goal(Days)</span>
                    </div>
                    <div className='text-center rounded-md flex shadow-md flex-col bg-white p-4'>
                        <span className='sm:text-3xl text-gray-600 text-xl font-bold'>{new Date(user.next_due_date).toLocaleDateString('en-US', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric'
                        })
                        }</span>
                        <span className='sm:text-[18px] capitalize font-semibold text-[16px] text-gray-500'>Next Due</span>
                    </div>
                </div>
                <div className='flex items-start shadow-md rounded-md bg-white p-4 justify-between'>
                    <div className='space-y-4 '>
                        <h4 className='text-xl font-medium text-gray-700'>Relationship Goal</h4>
                        <span className='text-gray-600 text-[14px]'>Connect every <span className='text-[16px] font-medium'>30 days</span></span>
                    </div>
                    <button className='btn'>Edit</button>
                </div>
                <div className='shadow-md rounded-md space-y-4 bg-white p-4'>
                    <h2 className='text-xl font-medium text-gray-600'>Quick Check-In</h2>

                    <div className='grid gap-6 grid-cols-3'>
                        <CallButton user={user}></CallButton>
                        <TextButton user={user}></TextButton>
                        <VideoButton user={user}></VideoButton>
                    </div>

                </div>

                <div className='bg-white block md:hidden sm:hidden rounded-md shadow-md p-4'>
                    <div className='flex items-center justify-between'>
                        <h3 className='font-bold text-xl text-gray-700'>Recent Interaction</h3>
                        <span className='btn'><FaHistory /> Full History</span>
                    </div>
                    <div className='p-3 space-y-3'>
                        <div className='flex items-center p-3 rounded-md shadow-xs justify-between'>
                            <div className='flex justify-center items-center gap-4'>
                                <span><BiSolidPhoneCall className='text-3xl' /></span>
                                <div>
                                    <p className='font-semibold text-gray-800'>Call</p>
                                    <small className='text-gray-600'>Asked for career advice</small>
                                </div>
                            </div>
                            <div>
                                <p className='font-semibold'>Jan28,2026</p>
                            </div>
                        </div>
                        <div className='flex items-center p-3 rounded-md shadow-xs justify-between'>
                            <div className='flex justify-center items-center gap-4'>
                                <span><MdOutlineMessage className='text-3xl' /></span>
                                <div>
                                    <p className='font-semibold text-gray-800'>Text</p>
                                    <small className='text-gray-600'>Asked for career advice</small>
                                </div>
                            </div>
                            <div>
                                <p className='font-semibold'>Jan28,2026</p>
                            </div>
                        </div>
                        <div className='flex items-center p-3 rounded-md shadow-xs justify-between'>
                            <div className='flex justify-center items-center gap-4'>
                                <span><IoMdVideocam className='text-3xl' /></span>
                                <div>
                                    <p className='font-semibold text-gray-800'>Video</p>
                                    <small className='text-gray-600'>Asked for career advice</small>
                                </div>
                            </div>
                            <div>
                                <p className='font-semibold'>Jan28,2026</p>
                            </div>
                        </div>
                        <div className='flex items-center p-3 rounded-md shadow-xs justify-between'>
                            <div className='flex justify-center items-center gap-4'>
                                <span><BiSolidPhoneCall className='text-3xl' /></span>
                                <div>
                                    <p className='font-semibold text-gray-800'>Call</p>
                                    <small className='text-gray-600'>Asked for career advice</small>
                                </div>
                            </div>
                            <div>
                                <p className='font-semibold'>Jan28,2026</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;