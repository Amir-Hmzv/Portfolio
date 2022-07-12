import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import Link from 'next/link';
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
import {FaFacebook, FaGithub, FaInstagram, FaLinkedinIn} from 'react-icons/fa'
import {useRouter} from 'next/router'
const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false)
    const [navBg, setNavBg] = useState('#ecf0f3');
    const [linkColor, setLinkColor] = useState('#1f2937');
    const router = useRouter()
    const handleNav =() => {
        setNav(!nav)
    }

    useEffect(() => {
        const handleShadow = () => {
          if (window.scrollY >= 90) {
            setShadow(true);
          } else {
            setShadow(false);
          }
        };
        window.addEventListener('scroll', handleShadow);
      }, []);
      useEffect(() => {
        if (router.asPath === '/property') {
            setNavBg('transparent')
            setLinkColor('#fafafa')
        }else{
            setNavBg('#ecf0f3')
            setLinkColor('#1f2937')
        }
      }, [])
    return (
        <div style={{ backgroundColor: `${navBg}`}} className={shadow ? `w-full h-20 fixed  shadow-xl bg-slate-100   z-[100]` : `w-full h-20 fixed  z-[100]`}>
            <div className='flex justify-between items-center  w-full h-full px-2  2xl:px-16'>
        <Image src={`/../public/assets/navLogo.png`} alt='' width={125} height={50}/>

            <ul style={{color:`${linkColor}`}} className= 'hidden  md:flex'>
                <Link href={'/'}>
                    <li className=' uppercase ml-10 text-sm hover:border-b'>Home</li>
                </Link>
            
                <Link href={'/#skill'}>
                    <li className=' uppercase ml-10 text-sm hover:border-b'>Skills</li>
                </Link>
                <Link href={'/#projects'}>
                    <li className=' uppercase ml-10 text-sm hover:border-b'>Projects</li>
                </Link>
                <Link href={'/#contact'}>
                    <li className=' uppercase ml-10 text-sm hover:border-b'>Contact</li>
                </Link>
            </ul>
            <div style={{color:`${linkColor}`}} onClick={handleNav} className='md:hidden cursor-pointer'>
                <AiOutlineMenu   size={25}/>
            </div>
            </div>

            <div className={`${nav ? `lef-0 top-0 md:hidden  fixed  h-screen w-full bg-black/70` : ''}`}>
            <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-300' :
        'fixed left-[-100%] top-0  p-10 ease-in duration-300'}>
                <div>
                <div className='flex justify-between '>
                    <div>
                       <Link href={'/'}><Image src={`/../public/assets/navLogo.png`} alt='' width={87} height={35} /></Link>  
                    </div>
                    <div onClick={handleNav} className=' rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                        <AiOutlineClose/>
                    </div>
                </div>
                <div className='border-b border-gray-300 my-4'>
                   <p className='w-[85%] md:w-[95%] py-4' > Lets Build something legendy together</p>
                </div>
            </div>
            <div className='py-4'>
            <ul className=' uppercase'>
                <Link href={`/`}>
                    <li onClick={() => setNav(!nav)} className='py-4 text-sm'>Home</li>
                </Link>
             
                <Link href={`/#skill`}>
                    <li onClick={() => setNav(!nav)} className='py-4 text-sm'>Skills</li>
                </Link>
                <Link href={`/#projects`}>
                    <li onClick={() => setNav(!nav)} className='py-4 text-sm'>Projects</li>
                </Link>
                <Link href={`/#contact`}>
                    <li onClick={() => setNav(!nav)} className='py-4 text-sm'>Contact</li>
                </Link>
           
            </ul>
            <div className='pt-40'>
            <p className=' uppercase tracking-widest text-[#5651e5]'>Let`s Connect</p>
            <div className='flex  justify-between items-center w-full sm:w-[80%] mt-5'>
            <div className=' rounded-full  shadow-lg shadow-gray-400 cursor-pointer p-3 hover:scale-105 easein duration-300'>
            <FaLinkedinIn/>
            </div>
            <div className=' rounded-full  shadow-lg shadow-gray-400 cursor-pointer p-3 hover:scale-105 easein duration-300'>
            <FaGithub/>
            </div>
            <div className=' rounded-full  shadow-lg shadow-gray-400 cursor-pointer p-3 hover:scale-105 easein duration-300'>
            <FaFacebook/>
            </div>
            <div className=' rounded-full  shadow-lg shadow-gray-400 cursor-pointer p-3 hover:scale-105 easein duration-300'>
            <FaInstagram/>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Navbar;