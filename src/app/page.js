import Banner from '@/component/Banner/Banner';
import Heroinfo from '@/component/HeroInformation/Heroinfo';
import YourFriends from '@/component/YourFriends/YourFriends';
import React, { cache, use } from 'react';
export const dynamic = "force-dynamic";

const friendsData = async function () {
  const res = await fetch('/data.json');
  const data = await res.json();
  cache: "no-store"
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