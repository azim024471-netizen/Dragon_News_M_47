import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import UserPng from '@/assets/user.png'
import NavLink from './NavLink';

const NavBar = () => {
    return (
        <div className='flex justify-between  container mx-auto mt-7 '>
            <div></div>
          <ul className='flex justify-between gap-3 text-gray-700'>
            <li><NavLink href={'/'}>Home</NavLink></li>
            <li><NavLink className={'text-red-500'} href={'/about'}> About</NavLink></li>
            <li><NavLink href={'/carrier'}>Carrier</NavLink></li>
          </ul>

          <div className='flex gap-3.5 items-center'>
            <Image src={UserPng} alt='user' width={55} height={55} ></Image>
            <button className='btn bg-purple-900 text-white'><Link href={'/login'}>Login</Link></button>
          </div>
        </div>
    );
};

export default NavBar;