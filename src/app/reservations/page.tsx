"use client"
import DateTimeReserve from "@/components/DateTimeReserve";
import {Select,MenuItem,TextField} from "@mui/material";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";
import { useSearchParams } from "next/navigation";
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/redux/store'
import { addReservation } from "@/redux/features/reserveSlice";
import { ReservationItem } from '../../../interface'
import { useState } from 'react'
import dayjs, { Dayjs } from 'dayjs'

export default function Reservation(){

    const urlParams=useSearchParams()
    const dispatch = useDispatch<AppDispatch>();
    
    const makeReservation = () => {
        if ( reserveDate && name && reserveTime && citizenID && reserveLocation) {
             const item:ReservationItem = {
                name: name,
                id: citizenID,
                cowork: reserveLocation,
                ReservationDate: dayjs(reserveDate).format("YYYY/MM/DD"),
                ReservationTime: dayjs(reserveTime).format("HH:mm")
             } 
             dispatch(addReservation(item));
         }
 
     }
     const [reserveDate, setReserveDate] = useState<Dayjs | null>(null);
     const [reserveTime, setReserveTime] = useState<Dayjs | null>(null);
     const [name, setName] = useState<string | null>("");
     const [citizenID, setCitizenID] = useState<string | null>("");
     const [reserveLocation, setReserveLocation] = useState<string>('');

    return(
        <main className="w-full flex flex-col items-center space-y-4">
            <form className="w-[50%] flex flex-col space-y-4 bg-white text-black-600 border border-gray-600
            font-semibold m-20 p-10 rounded-[5%] flex justify-center items-center shadow-xl" >
                <div className="text-x1 font-medium text-black text-3xl">Co-Workingspace Reservation</div>
                <TextField
                    variant='standard'
                    margin="normal"
                    fullWidth
                    id="Name"
                    label="Name"
                    name="Name"
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                    />
                    <TextField
                    variant='standard'
                    margin="normal"
                    fullWidth
                    id="Citizen-ID"
                    label="Citizen ID"
                    name="Citizen-ID"
                    value={citizenID}
                    onChange={(e)=> setCitizenID(e.target.value)}
                   />
                </form>
                <div className='w-full flex flex-col items-center space-y-2'>
                    <div className="text-md text-left text-gray-600"></div>
                    <DateTimeReserve onDateChange={(value:Dayjs)=>{setReserveDate(value)}} onTimeChange={(value:Dayjs)=>{setReserveTime(value)}} onLocationChange={(value:string)=>setReserveLocation(value)}/>
                </div>
                <button type="submit" className="block rounded-md bg-sky-500 hover:bg-indigo-500 delay-100 px-3 py-2 shadow-sm"
                onClick={makeReservation}>
                    Reserve Co-workingspace
                </button>
            
                <div>
                </div>
        </main>
    );
}