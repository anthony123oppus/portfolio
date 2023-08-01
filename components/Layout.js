//fonts
import {Sora} from '@next/font/google';

//fonts settings
const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100','200','300','400','500','600','700','800'],
});

//components import
import Nav from '../components/Nav';
import Header from '../components/Header';
import TopLeftImg from '../components/TopLeftImg';
import MagicNav from '../components/MagicNav';
import Navtry from '../components/Navtry';

const Layout = ({children}) => {
  return (
    <div className={'page bg-active text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative'}>
      <TopLeftImg />
      {/* <Nav /> */}
      <Navtry />
      <Header />
      {children}
    </div>
  );
};

export default Layout;
