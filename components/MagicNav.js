import{
    HiHome,
    HiUser,
    HiViewColumns,
    HiRectangleGroup,
    HiChatBubbleBottomCenterText,
    HiEnvelope,
  } from 'react-icons/hi2';
  
  //  links
  export const navData = [
    { name: 'Home',
      path: '/',
      pathno: 0,
      icon: <HiHome />,
      dis: 'translate-x-0'
    },
    { name: 'About',
      path: '/about',
      pathno: 1,
      icon: <HiUser />,
      dis: 'translate-x-16'
    },
    { name: 'Services',
      path: '/services',
      pathno: 2,
      icon: <HiRectangleGroup />,
      dis: 'translate-x-32'
     },
    { name: 'Work',
      path: '/work',
      pathno: 3,
      icon: <HiViewColumns />,
      dis: 'translate-x-48'
    },
    {
      name: 'Testimonials',
      path: '/testimonials',
      pathno: 4,
      icon: <HiChatBubbleBottomCenterText />,
      dis: 'translate-x-64'
    },
    {
      name: 'Contact',
      path: '/contact',
      pathno: 5,
      icon: <HiEnvelope />,
      dis: 'translate-x-80'
    },
  ];
  
  //links
  import Link from 'next/link';
  
  //next router
  import { useRouter } from 'next/router';
  import { useState } from 'react';
  
  const Nav = () => {
    const router = useRouter();
    const pathname = router.pathname;
    const pathno = router.pathno;
    const [active, setActive] = useState(pathno);
    return (
      <div className='flex flex-col items-center text-black xl:justify-center fixed h-max bottom-0 mt-auto
      xl:right-[1%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen '>
        <ul className='flex w-full rounded-t-xl xl:flex-col items-center justify-between xl:justify-center
        px-5 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white backdrop-blur-sm
       xl:rounded-full '>
        {navData.map((link, index, icon, pname) => {
          return (
            <Link href={link.path} key={index} className='w-20 xl:w-16 xl:h-20'>
                {active}
               <div className='flex flex-col items-center text-center pt-6'
                  onClick={() => setActive(link.path === pathname && 'text-accent')}>
                <span className={`text-xl cursor-pointer ${index === active && ' text-accent xl:-ml-16 -mt-16 '}`}>
                    {link.icon}
                </span>
                <span className={` ${active === index ? 'translate-y-4 duration-700 opacity-100 xl:hidden' : 'opacity-0 translate-y-10 xl:hidden'} `}>{link.name}</span>
               </div>
            </Link>
          );
        })}
        </ul>
      </div>
    );
  };
  
  export default Nav;
  