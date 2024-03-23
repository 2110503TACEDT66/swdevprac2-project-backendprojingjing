'use client'
import styles from './banner.module.css'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Banner(){

    const covers = ['/img/cover1.jpg','/img/cover2.jpg','/img/cover3.jpg','/img/cover4.jpg']
    const [index, setIndex] = useState(0)
    const router = useRouter()

    return(
        <div className='block p-[5px] m-0 w-[100vw] h-[90vh] relative' onClick={()=>{setIndex(index+1)}}>
            <Image src={covers[index%4]}
            alt='coworkingspace'
            fill={true}
            priority
            // objectFit='cover'
            />
            <div className='relative top-[100px] z-20 text-center bg-gray-50/70 mx-[15%]'>
                <h1 className='text-4xl font-medium text-black bg-transparent-400'>
                    Co-working Space Reservation
                </h1>
                <h3 className='test-xl font-serif text-black'>
                    Unlock your potential, collaborate in our space!
                </h3>
            </div>
            <button className='bg-gray-200 text-gray-600 border border-black-600
            font-semibold py-2 px-2 m-2 rounded z-30 absolute bottom-5 right-10
            hover:bg-gray-600 hover:text-white hover:border-transparent'
            onClick={(e)=>{e.stopPropagation;router.push('/coworkingspace')}}>
                Select Co-Workingspace NOW
            </button>
        </div>
    )
}