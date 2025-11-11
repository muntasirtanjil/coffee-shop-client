import React from 'react';
import headerImg from '../assets/more/15.jpg'
import logo from '../assets/more/logo1.png'


const Header = () => {
    return (
        <div>
            <div className='relative '>
                <img src={headerImg} className='  h-[65px] w-full ' alt="" />
                <div className='flex items-center absolute top-0  w-full h-full justify-center '>
                    <img className=' w-[50px] md:w-[60px] ' src={logo} alt="" />
                    <h1 className='rancho py-3.5 text-white text-lg md:text-2xl'>Espresso Emporium</h1>
                </div>
            </div>
            

        </div>
    );
};

export default Header;