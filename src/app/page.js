import Banner from '@/component/Banner/Banner';
import Heroinfo from '@/component/HeroInformation/Heroinfo';
import YourFriends from '@/component/YourFriends/YourFriends';
import React, { use } from 'react';

const friendsData = async function () {
  const res = await fetch('http://localhost:3000/data.json');
  const data = res.json();
  return data;
}


const Home = () => {
 
  return (
    
    <div>
      <main className='min-h-screen px-4'>
        <Banner></Banner>
        <Heroinfo friendsData ={friendsData}></Heroinfo>
        <YourFriends friendsData= {friendsData} ></YourFriends>
      </main>
    </div>

  );
};

export default Home;