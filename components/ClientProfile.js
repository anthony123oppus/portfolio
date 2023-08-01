import React from 'react'

import Image from 'next/image';

import Link from 'next/link';

export const clientProfile = [
  {
    name: 'Joseph',
    path: '/',
    icon: '/user-img1.jpg',
  },
  {
    name: 'Sophia',
    path: '/',
    icon: '/user-img2.jpg',
  },
  {
    name: 'Anthony',
    path: '/',
    icon: '/user-img3.jpg',
  },
  {
    name: 'Cassy',
    path: '/',
    icon: '/user-img4.jpg',
  },
  {
    name: 'Albert',
    path: '/',
    icon: '/user-img5.jpg',
  },
]


const ClientProfile = () => {
  return (
    <div  className=' flex justify-center items-center text-1md xl:text-2xl'>
        Previous Client : 
        <ul className='flex relative ml-2'>
        {clientProfile.map((link, index) => {
                return (
                      <Link 
                        className='justify-center items-center' 
                        href={link.path} 
                        key={index}
                      >
                        <Image src={link.icon} width={60} height={60} alt='' className='flex rounded-full border-2  hover:scale-110'/>
                      </Link>
                );
              })}
            {/* <li className=''><Image src={'/user-img1.jpg'} width={60}  height={60} alt='' className='rounded-full border-4'/></li>
            <li className=''><Image src={'/user-img2.jpg'} width={60}  height={60} alt='' className='rounded-full border-4'/></li>
            <li className=''><Image src={'/user-img3.jpg'} width={60}  height={60} alt='' className='rounded-full border-4'/></li>
            <li className=''><Image src={'/user-img4.jpg'} width={60}  height={60} alt='' className='rounded-full border-4'/></li>
            <li className=''><Image src={'/user-img5.jpg'} width={60}  height={60} alt='' className='rounded-full border-4'/></li> */}
        </ul>
    </div>
  );
};

export default ClientProfile