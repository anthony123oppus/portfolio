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
      icon: <HiHome /> 
    },
    { name: 'About',
      path: '/about',
      icon: <HiUser /> 
    },
    { name: 'Services',
      path: '/services',
      icon: <HiRectangleGroup />
     },
    { name: 'Work',
      path: '/work',
      icon: <HiViewColumns />
    },
    {
      name: 'Testimonials',
      path: '/testimonials',
      icon: <HiChatBubbleBottomCenterText />,
    },
    {
      name: 'Contact',
      path: '/contact',
      icon: <HiEnvelope />,
    },
  ];
  
  //links
  import Link from 'next/link';
  
  //next router
  import { useRouter } from 'next/router';
  
  const Nav = () => {
    const router = useRouter();
    const pathname = router.pathname;
    return (
      <nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto
       xl:right-[1%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen'>
        {/* inner */}
        <div className='flex w-full rounded-t-xl xl:flex-col items-center justify-between xl:justify-center
         gap-y-10 px-8 md:px-40 xl:px-0 h-[70px] xl:h-max py-8 bg-slate-950/70 backdrop-blur-sm text-2xl xl:text-2xl
         xl:rounded-full'>
          {navData.map((link, index) => {
            return (
                  <Link 
                  className={`${link.path === pathname ? 'text-accent rounded-[50%] justify-center items-center -mt-16 xl:-ml-16 xl:mt-0 w-[60px] h-[60px]  xl:w-[60px] xl:h-[60px] border-4 bg-white' : ''} relative flex items-center group hover:text-accent duration-300`} 
                    href={link.path} 
                    key={index}
                  >

                    {/* tooltip */}
                    <div className='absolute xl:right-0 hidden xl:group-hover:flex xl:group-hover:pr-[68px]'>
                      <div className='bg-white relative flex text-primary items-center p-[6px] rounded-[3px]'>
                        <div className='text-[] xl:text-[15px] leading-none font-semibold capitalize'>
                          {link.name}
                        </div>
                        <div className='xl:border-solid xl:border-l-white xl:border-l-8 xl:border-y-transparent xl:border-y-[6px] xl:border-r-0 xl:absolute xl:-right-2'></div>
                      </div>
                    </div>
                    {/* icon */}
                    <div>{link.icon}</div>
                  </Link>
            );
          })}
        </div>
      </nav>
    );
  };
  
  export default Nav;
  