//next image
import Image from 'next/image';

// next link
import Link from 'next/link';

// icons
import {HiArrowRight} from 'react-icons/hi2';


const ProjectsBtn = ({text,url}) => {
  return (
    <div className='mx-auto xl:mx-0 group xl:hover:translate-x-2 transition-all duration-300'>
      <Link href={url} 
        className='relative w-[185px] h-[40px] flex justify-center items-center bg-black/50 border-4 rounded-full xl:group-hover:bg-slate-800/80 hover:scale-110 transition-all duration-500'>{text}
        {/* <Image 
          src={'/rounded-text.png'} 
          width={141} height={148} 
          alt='' 
          className='animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]'
        /> */} 
        <HiArrowRight className='absolute right-4 text-2xl xl:group-hover:translate-x-2 transition-all duration-500' />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
