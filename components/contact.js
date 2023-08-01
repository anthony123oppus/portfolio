import React from "react";

import {motion} from 'framer-motion';
import { fadeIn } from '../variants';
import ProjectsBtn from '../components/ProjectsBtn';
import { EarthCanvas } from "./canvas";



const FormContact = () => {
  return (
    <div className="container mx-auto py-32 text-center xl:text-left h-full flex items-center justify-center h-full mt-2 xl:bg-black/10 rounded-xl">
      <div className='absolute h-20 w-20 xl:h-40 xl:w-40 rounded-full bg-preview bg-cover rotate-90 top-[130px] right-2 xl:bottom-[525px] xl:left-[370px]'></div>
      <div className='absolute  xl:h-40 xl:w-40 rounded-full bg-active xl:bottom-[95px] xl:right-[410px]'></div>
        <motion.div variants={fadeIn('down', 0.4)} initial='hidden' animate='show' exit='hidden' className='flex flex-col w-full max-w-[700px] bg-white/20 backdrop-filter backdrop-blur-xl shadow-lg px-2 pb-4 rounded-xl xl:rounded-tr-none xl:rounded-br-none xl:rounded-tl-xl xl:rounded-bl-xl xl:px-10 xl:pb-10'>
        <h2 className='h2 mb-6 mt-4 xl:mb-4'>
          Let's <span className='text-accent'>connect.</span>
        </h2>
        {/* slider */}
        <form variants={fadeIn('left', 0.4)} initial='hidden' animate='show' exit='hidden' className='flex-1 flex flex-col gap-6 w-full mx-auto'>
          <div className='flex gap-x-6 w-full'>
            <input type='text'  placeholder='name' className='input text-black bg-black/20 backdrop-filter backdrop-blur-xl' />
            <input type='text' placeholder='email' className='input text-black bg-black/20 backdrop-filter backdrop-blur-xl' />
          </div>
          <input type='text' placeholder='subject' className='input text-black bg-black/20 backdrop-filter backdrop-blur-xl' />
          <textarea placeholder="message" className="text-black textarea rounded-xl bg-black/20 backdrop-filter backdrop-blur-xl"></textarea>
          <ProjectsBtn url='/work' text='Get Touch' />
        </form>
        </motion.div>
        <motion.div variants={fadeIn('down', 0.4)} initial='hidden' animate='show' exit='hidden' className='hidden xl:flex h-[539px] rounded-tr-xl rounded-br-xl shadow-xl w-full z-0 bg-gray-900'>
        <EarthCanvas/>
        </motion.div>
    </div>
  );
};

export default FormContact;
