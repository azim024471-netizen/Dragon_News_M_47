'use client'

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import UserPng from '@/assets/user.png'
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';
// import { useSession , signOut} from '@/lib/auth-client';


const NavBar = () => {
  

  const {data: session , isPending} = authClient.useSession();
     const user = session?.user;
     
    //  const {image, name} = user;
    //  console.log(user ,' user data is herarewwwwwwwww')
  
  // console.log(session, 'new consol is hoiehrssssrrrrrrrrrrrrrre')



  // const {data,  isPending} = useSession();
  // console.log(data, isPending, 'this is nav consolllllllll')



    return (
        <div className='flex justify-between  container mx-auto mt-7 '>
            <div></div>
          <ul className='flex justify-between gap-3 text-gray-700'>
            <li><NavLink href={'/'}>Home</NavLink></li>
            <li><NavLink className={'text-red-500'} href={'/about'}> About</NavLink></li>
            <li><NavLink href={'/carrier'}>Carrier</NavLink></li>
          </ul>

          {  isPending ? ("loading........") :
            user ? (<div className='flex gap-3.5 items-center'>
              <h1>Hello, {user?.name}</h1>
            <Image src={user?.image || UserPng} alt='user' width={55} height={55} ></Image>
 <button onClick={async()=>await authClient.signOut()} className='btn bg-red-800 text-white'><Link href={''}>LogOut</Link></button>
                    {/* <button className='btn bg-amber-100' onClick={()=>signOut()}>Log Out</button> */}

          </div>) :
           (         
             
             <button className='btn bg-purple-900 text-white'><Link href={'/login'}>Login</Link></button>
)
          }
        </div>
    );
};

export default NavBar;