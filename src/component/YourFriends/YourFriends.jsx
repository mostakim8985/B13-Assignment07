
import React, { Suspense, use } from 'react';
import YourFriendsCards from './YourFriendsCards';

const YourFriends = async ({friendsData}) => {
    const data = await friendsData();
    
    
    
    return (
        <div className='container mt-20 py-5 px-2 bg-base-200 mx-auto'>
            <h3 className=' border-b text-2xl font-semibold border-gray-300'>Your Friends</h3>
            <div className='mt-20 grid md:grid-cols-3 grid-cols-2 sm:grid-cols-4 gap-6'>
                {
                    data.map(items => <YourFriendsCards key={items.id} items= {items}></YourFriendsCards>)
                }
            </div>
        </div>
    );
};

export default YourFriends;