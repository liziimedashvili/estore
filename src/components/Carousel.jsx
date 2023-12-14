/* eslint-disable no-unused-vars */
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SliderPhoto1 from "../assets/Rectangle 25.png";
import SliderPhoto2 from "../assets/Rectangle 27.png";
import SliderPhoto3 from "../assets/Rectangle 29.png";
import SliderPhoto4 from "../assets/Rectangle 31.png";
import SliderPhoto5 from "../assets/Rectangle 33.png";
import SliderPhoto6 from "../assets/Rectangle 35.png";
import SliderPhoto7 from "../assets/Rectangle 37.png";
import SliderPhoto8 from "../assets/Rectangle 39.png";
import SliderPhoto9 from "../assets/Rectangle 47.png";
import SliderPhoto10 from "../assets/Rectangle 49.png";
import SliderPhoto11 from "../assets/Rectangle 51.png";
import SliderPhoto12 from "../assets/Rectangle 53.png";
import SliderPhoto13 from "../assets/Rectangle 55.png";
import SliderPhoto14 from "../assets/Rectangle 57.png";

const Carousel = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 200,
    easing: 'cubic-bezier(0.68, -0.55, 0.27, 1.55)',
    slidesToShow: 7,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className='custom-container mb-[20px] ml-2 w-[1400px] max-w-[350px] '>
      <div>
        <img src={SliderPhoto1} alt="Slide 1" className='w-[220px] max-w-[480px]:w-[100px]' />
      </div>
      <div>
        <img src={SliderPhoto2} alt="Slide 2" className='w-[220px] max-w-[480px]:w-[100px]' />
      </div>
      <div>
        <img src={SliderPhoto3} alt="Slide 3" className='w-[220px] max-w-[480px]:w-[100px]' />
      </div>
      <div>
        <img src={SliderPhoto4} alt="Slide 4" className='w-[220px] max-w-[480px]:w-[100px]' />
      </div>
      <div>
        <img src={SliderPhoto5} alt="Slide 5" className='w-[220px] max-w-[480px]:w-[100px]' />
      </div>
      <div>
        <img src={SliderPhoto6} alt="Slide 6" className='w-[220px] max-w-[480px]:w-[100px]' />
      </div>
      <div>
        <img src={SliderPhoto7} alt="Slide 7" className='w-[220px] max-w-[480px]:w-[100px]' />
      </div>
      <div>
        <img src={SliderPhoto8} alt="Slide 8" className='w-[220px] max-w-[480px]:w-[100px]' />
      </div>
      <div>
        <img src={SliderPhoto9} alt="Slide 9" className='w-[220px] max-w-[480px]:w-[100px]' />
      </div>
      <div>
        <img src={SliderPhoto10} alt="Slide 10" className='w-[220px] max-w-[480px]:w-[100px]' />
      </div>
      <div>
        <img src={SliderPhoto11} alt="Slide 11" className='w-[220px] max-w-[480px]:w-[100px]' />
      </div>
      <div>
        <img src={SliderPhoto12} alt="Slide 12" className='w-[220px] max-w-[480px]:w-[100px]' />
      </div>
      <div>
        <img src={SliderPhoto13} alt="Slide 13" className='w-[220px] max-w-[480px]:w-[100px]' />
      </div>
      <div>
        <img src={SliderPhoto14} alt="Slide 14" className='w-[220px] max-w-[480px]:w-[100px]' />
      </div>
    </Slider>
  );
};

export default Carousel;
