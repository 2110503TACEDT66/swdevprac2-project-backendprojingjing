import styles from './banner.module.css'
import Image from 'next/image'

export default function Banner(){
    return(
        <div className={styles.banner}>
            <Image src={'/img/main1.jpg'}
            alt='coworkingspace'
            fill={true}
            priority
            objectFit='cover'/>
            <div className='relative top-[100px] z-20 text-center bg-gray-50/70 mx-[15%]'>
                <h1 className='text-4xl font-medium text-black bg-transparent-400'>
                    Co-working Space Reservation
                </h1>
                <h3 className='test-xl font-serif text-black'>
                    Unlock your potential, collaborate in our space!
                </h3>
            </div>
        </div>
    )
}