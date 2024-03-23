import styles from './card.module.css'
import Image from 'next/image'
import * as React from 'react';
import InteractiveCard from './InteractiveCard'
import Rating from '@mui/material/Rating';

export default function Card({coworkingspaceName,imgSrc,onRating}:{coworkingspaceName:string,imgSrc:string,onRating?:Function}){
    const [value, setValue] = React.useState<number|null>(5);
    return(
        <InteractiveCard contentname={coworkingspaceName}>
            <div className='w-full h-[70%] relative rounded-t-lg '>
                <Image src={imgSrc}
                alt='Coworkingspace Picture'
                fill={true}
                className='object-cover rounded-t-lg'
                />
            </div>
            <div className='w-full h-[20%] p-[10px] text-xl text-black font-sans'>{coworkingspaceName}</div>
            {
                onRating?<Rating
                data-testid={`${coworkingspaceName} Rating`}
                id={`${coworkingspaceName} Rating`}
                name={`${coworkingspaceName} Rating`}
                value={value}
                onClick={(e)=>{e.stopPropagation()}}
                onChange={(event, newValue) => {
                    setValue(newValue);
                    onRating(coworkingspaceName,newValue)
            }}/>:' '
            }
        </InteractiveCard>
    )
}

