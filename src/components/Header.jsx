import Socials from './Socials';
import MobileNav from './MobileNav';

import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CursorContext } from '../context/CursorContext';
import NewsLetter from '../pages/NewsLetter';

const Header = () => {
  const { mouseEnterHandler, mouseLeaverHandler } = useContext(CursorContext);
  return (
    <>
      <header className='fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-140px] flex items-center'>
        <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
          <Link to={'/'}>
            <h1 className='h2 font-bold max-w-[200px] font-primary'>Confidence Ezemba</h1>
          </Link>
          <nav
            className="hidden xl:flex gap-x-12 font-semibold"
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaverHandler}
          >
            <Link to={'/'} className='text-[#696c6d] hover:text-primary transition'>
              Home
            </Link>
            <Link to={'/about'} className='text-[#696c6d] hover:text-primary transition'>
              About
            </Link>
            <Link to={'/modelling'} className='text-[#696c6d] hover:text-primary transition'>
              Modelling
            </Link>
            <Link to={'/books'} className='text-[#696c6d] hover:text-primary transition'>
              Books
            </Link>
            <Link to={'/newsletter'} className='text-[#696c6d] hover:text-primary transition'>
              Newsletter
            </Link>
          </nav>
        </div>
        <Socials />
        <MobileNav />
      </header>
    </>
  )
}

export default Header