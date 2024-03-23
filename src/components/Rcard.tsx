import ReviewCard from "./ReviewCard";
import Image from "next/image";
import { styled } from '@mui/material/styles';
import { Rating } from "@mui/material";

export default function Rcard({imgSrc, name, rating, description}:{imgSrc:string, name:string, rating:number, description:string}) {
    return (
    <ReviewCard contentname="feedback">
            <div className='w-[20%] h-[20%] relative rounded-t-lg '>
                <Image src={imgSrc}
                alt='profile pics'
                fill={true}
                className='object-cover rounded-full w-full mx-2 mt-2'
                />
            </div><br />
            <div className="mx-2 mt-0 flex flex-row font-bold">
                    {name}
                    <div className="mx-2"><Rating name="read-only" value={rating} readOnly /></div>
            </div>
            <div className="w-[80%] mx-2">
                {description}
            </div>
    </ReviewCard>
    )
}