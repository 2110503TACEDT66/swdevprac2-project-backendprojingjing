import styles from './topmenu.module.css'
import Image from 'next/image';
import TopMenuItem from './TopMenuItem';
import Link from 'next/link';

export default function TopMenu(){
    return(
        <div className={styles.menucontainer}>
            <TopMenuItem title='Reservation' pageRef='/reservations'/>
            <Link href="/">
                <Image src={'/img/logo.jpg'} className='h-[100%] w-auto hover:scale-105' alt='logo' 
                    width={0} height={0} sizes='100vh' />
            </Link>
        </div>
    );
}