import { useState, useEffect } from 'react';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import Image from 'next/image';
import TopMenuItem from './TopMenuItem';
import { Link } from '@mui/material';

export default async function TopMenu(){

    const session = await getServerSession(authOptions)

    return(
        <div className="h-[70px] bg-gray-400 fixed top-0 left-0 right-0 z-30 border-t border-b border-gray-500 flex justify-start">   
            <Link href="/">
                <Image src={'/img/logo.png'} className='h-[100%] w-[100%] hover:scale-105' alt='logo' 
                    width={0} height={0} sizes='100vh' />
            </Link>
            <TopMenuItem title='Reservation' pageRef='/reservations'/>
            <TopMenuItem title='About us' pageRef='/about'/>
            <TopMenuItem title='Contact us' pageRef='/contact'/>
            <TopMenuItem title='myReservation' pageRef='/myreservation'/>
            <TopMenuItem title='Register' pageRef='/register'/>
            {
                session
                ?
                <Link href="/profile">
                <Image src={'/img/profile.png'} className='h-[100%] w-auto scale-75 absolute right-0 h-full' alt='logo' 
                    width={0} height={0} sizes='100vh' />
                </Link>
                :
                <Link href="/api/auth/signin" className=''>
                    <div className='flex items-center absolute right-0 h-[100%] w-auto px-2 text-white text-lg font-semibold'>Sign-In
                    </div>
                </Link>
            }
        </div>
    );
}