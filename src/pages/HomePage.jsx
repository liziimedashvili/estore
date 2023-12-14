/* eslint-disable no-unused-vars */
import React from 'react';
import BgPhoto from "../assets/Rectangle 122.png";
import Carousel from "../components/Carousel";
import HomePageCards from '../components/HomePageCards';

export default function HomePage() {
  return (
    <div className='custom-container flex flex-col gap-[40px] lg:w-3/4 '>
      <div>
        <img
          src={BgPhoto}
          alt="Example"
          className="w-full "
        />
      </div>
      <div>
        <Carousel/>
      </div>
      <div>
        <HomePageCards/>
      </div>
      <div>
        <Carousel />
      </div>
      <div>
        <HomePageCards/>
      </div>
    </div>
  );
}
