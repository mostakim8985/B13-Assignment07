import Banner from '@/component/Banner/Banner';
import Heroinfo from '@/component/HeroInformation/Heroinfo';
import React from 'react';

const Home = () => {
  return (
    <div>
      <main className='min-h-screen px-4'>
        <Banner></Banner>
        <Heroinfo></Heroinfo>
      </main>
    </div>

  );
};

export default Home;