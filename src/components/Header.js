import React from 'react';
import { Link} from 'react-scroll'
const Header = () => {
  return <header className='py-8'>
    <div className='container mx-auto'>
    <div  className='flex justify-between items-center'>
      <a href='#'>
      <h1 className={"text-4xl font-bold bg-gradient-to-r from-pink-500 via-purpal-300 to-blue-400 text-transparent bg-clip-text inline-block"}>SHIVAM<br/> BOLE</h1>
      </a>
      <Link  to="contact" activeClass='active' smooth={true} spy={true}>
      <button className='btn btn-sm'>Hire me</button>
      </Link>
    </div>
    </div>
</header>
};

export default Header;
