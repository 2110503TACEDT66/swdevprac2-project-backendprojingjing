import styles from './card.module.css'
import Image from 'next/image'
import InteractiveCard from './InteractiveCard'

export default function Card({coworkingspaceName,imgSrc}:{coworkingspaceName:string,imgSrc:string}){
    return(
        <InteractiveCard contentname={coworkingspaceName}>
            <div className='w-full h-[70%] relative rounded-t-lg'>
                <Image src={imgSrc}
                alt='Coworkingspace Picture'
                fill={true}
                className='object-cover rounded-t-lg'
                />
            </div>
            <div className='w-[250px] h-[300px] text-black ml-2 mt-1'>{coworkingspaceName}</div>
        </InteractiveCard>
    )
}

