'use client'
import * as React from 'react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Rating from '@mui/material/Rating';
import InteractiveCard from './InteractiveCard';

export default function Card({ coworkingspaceName, imgSrc, star }: { coworkingspaceName: string, imgSrc: string, star: number }) {
    const [value, setValue] = useState<number>(star || 0);
    const [isClient, setIsClient] = useState<boolean>(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <InteractiveCard contentname={coworkingspaceName}>
            <div className='w-full h-[70%] relative rounded-t-lg'>
                <Image
                    src={imgSrc}
                    alt='Coworkingspace Picture'
                    fill={true}
                    className='object-cover rounded-t-lg'
                />
            </div>
            <div className='w-full h-[20%] p-[10px] text-xl text-black font-sans'>{coworkingspaceName}</div>
            {isClient && (
                <Rating
                    data-testid={`${coworkingspaceName} Rating`}
                    id={`${coworkingspaceName} Rating`}
                    name={`${coworkingspaceName} Rating`}
                    value={value}
                    readOnly
                />
            )}
        </InteractiveCard>
    );
}
