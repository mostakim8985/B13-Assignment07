import Banner from '@/component/Banner/Banner';
import Heroinfo from '@/component/HeroInformation/Heroinfo';
import YourFriends from '@/component/YourFriends/YourFriends';
import React from 'react';

import friendsData from '../../public/data.json';

const Home = () => {
  return (
    <div>
      <main className='min-h-screen px-4'>
        <Banner />
        <Heroinfo friendsData={friendsData} />
        <YourFriends friendsData={friendsData} />
      </main>
    </div>
  );
};

export default Home;