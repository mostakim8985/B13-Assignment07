import Banner from '@/component/Banner/Banner';
import Heroinfo from '@/component/HeroInformation/Heroinfo';
import YourFriends from '@/component/YourFriends/YourFriends';
import React from 'react';

const Home = () => {
  return (
    <div>
      <main className='min-h-screen px-4'>
        <Banner></Banner>
        <Heroinfo></Heroinfo>
        <YourFriends></YourFriends>
      </main>
    </div>

  );
};

export default Home;