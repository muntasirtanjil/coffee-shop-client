import React from 'react';
import logo from '..//assets/more/logo1.png';
import footerImage from '../assets/more/13.jpg'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { IoCall, IoLocationSharp } from 'react-icons/io5';
import { CgMail } from 'react-icons/cg';
import footerCopy from '../assets/more/15.jpg'
import { Link } from 'react-router';

const Footer = () => {
    return (
        <div className='bg-cover bg-center bg-no-repeat w-full  '
            style={{ backgroundImage: `url(${footerImage})` }}>
            <div className='w-10/12 mx-auto   md:flex items-center justify-center  md:gap-10  py-5 md:py-10 '>
                <div className=' space-y-3.5 md:space-y-6 '>
                    <img className='w-14' src={logo} alt="" />
                    <h2 className='rancho text-2xl md:text-3xl font-semibold  '>Espresso Emporium</h2>
                    <p className='text-gray-500'>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                    <div className=' flex items-center gap-3  '>
                        <Link to="https://www.facebook.com/muntasir.mahmud.693401"><FaFacebook size={24} /></Link>
                        <Link> <FiInstagram size={24} /></Link>
                        <Link>  <FaTwitter size={24} /></Link>
                        <Link> <FaLinkedin size={24} /></Link>
                    </div>
                    <h3 className='rancho text-2xl ' >Get in Touch</h3>
                    <p className='flex gap-3 items-center'><IoCall /> +88 01613790795</p>
                    <p className='flex gap-3 items-center' ><CgMail /> muntasirtanjil9@gmail.com</p>
                    <p className='flex gap-3 items-center'><IoLocationSharp /> Choddagram , Cumilla</p>
                </div>
                <div className=" pt-5 md:pt-0">
                    <div className="px-10">
                        <h1 className="text-2xl font-semibold rancho mb-4 text-[#4B2E05]">Connect with Us</h1>
                        <form className="space-y-3">
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full bg-white  border-none rounded-sm px-3 py-2 text-gray-700 "
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full bg-white border-none rounded-sm px-3 py-2 text-gray-700 "
                            />
                            <textarea
                                placeholder="Message"
                                rows="4"
                                className="w-full bg-white border-none rounded-sm px-3 py-2 text-gray-700 "
                            ></textarea>
                            <button
                                type="submit"
                                className="border border-[#4B2E05] text-[#4B2E05] hover:bg-[#4B2E05] hover:text-white transition-colors px-5 py-1 rounded-2xl"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>

            </div>
            <div className='bg-cover bg-center bg-no-repeat w-full  '
                style={{ backgroundImage: `url(${footerCopy})` }}>
                <h2 className='text-white rancho text-xs text-center py-3 md:text-sm'>Copyright Espresso Emporium ! All Rights Reserved</h2>
            </div>
        </div>
    );
};

export default Footer;