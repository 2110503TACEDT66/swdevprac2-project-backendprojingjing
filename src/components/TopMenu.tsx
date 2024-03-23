import styles from './topmenu.module.css'
import Image from 'next/image';
import TopMenuItem from './TopMenuItem';
import Link from 'next/link';

export default function TopMenu(){
    return(
        <div className="tailwind h-[70px] bg-gray-400 fixed top-0 left-0 right-0 z-30 border-t border-b border-gray-500 flex justify-start">   
            <Link href="/">
                <Image src={'/img/logo.png'} className='h-[100%] w-auto hover:scale-105' alt='logo' 
                    width={0} height={0} sizes='100vh' />
            </Link>
            <TopMenuItem title='Reservation' pageRef='/reservations'/>
            <TopMenuItem title='About us' pageRef='/about'/>
            <TopMenuItem title='Contact us' pageRef='/contact'/>
        </div>
    );
}
