import React from 'react';
// import swiper
import { Swiper, SwiperSlide } from 'swiper/react';
// swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination'; 

import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from 'react-icons/rx';

// required modules
import { FreeMode, Pagination } from 'swiper';
//icons

// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Branding',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];



const ServiceSlider = () => {
  return (
    <Swiper 
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className='h-[240px] sm:h-[340px]'
    >
      {serviceData.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className='bg-white/20 backdrop-filter backdrop-blur-xl shadow-lg h-max xl:h-[300px] rounded-lg px-6 py-6 xl:py-7 flex
               sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-white/30 hover:backdrop-filter hover:backdrop-blur-xl 
               hover:shadow-xl transition-all duration-300'>
                {/* icon */}
                <div className='text-4xl text-accent mb-4 group-hover:scale-110 transition-all duration-300'>{item.icon}</div>
                {/* title / desc */}
                <div className='mb-8'>
                  <div className='mb-1 text-lg group-hover:underline'>{item.title}</div>
                  <p className='max-w-[350px] leading-normal text-lg'>{item.description}</p>
                </div>
                {/* arrow */}
                <div className='text-3xl'>
                  <RxArrowTopRight className='xl:absolute xl:right-[50px] group-hover:rotate-45 xl:group-hover:translate-x-5 group-hover:text-accent transition-all duration-300' />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};

export default ServiceSlider;
