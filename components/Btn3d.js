import React from 'react'

// next link
import Link from 'next/link';

const Btn3d = () => {
  return (
    <div className='mx-auto xl:mx-0'>
      <Link href={'/work'} 
        className='relative w-[150px] h-38 bg-[#d4ae4d] border-2 rounded-full py-2 shadow-2xl drop-shadow-md  transition-all duration-200 
         flex justify-center items-center text-black text-xl bg-[linear-gradient(#ffffff99,#ffffff00_50%,#0000004d_50%,#ffffff33)]
         '>
            My Projects
      </Link>
    </div>
  );
};

export default Btn3d