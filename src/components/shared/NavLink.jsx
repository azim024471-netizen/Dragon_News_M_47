'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';


const NavLink = ({href, children,className}) => {
     const pathname = usePathname();
    //  console.log('path is  here  ' , pathname) 

     const isActive = pathname === href


    return (
        <Link className={`${className} ${isActive ? 'border-b-2 border-b-purple-700' : ''}`}
         href={href}>{children}</Link>
    );
};

export default NavLink;