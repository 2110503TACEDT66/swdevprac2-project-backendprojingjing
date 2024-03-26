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
import dayjs,{ Dayjs } from 'dayjs'
import Link from "next/link";

export default function Reservation(){


    const urlParams=useSearchParams()
    const cid = urlParams.get('id')
    const model = urlParams.get('model')
    const dispatch = useDispatch<AppDispatch>();
    
    const makeReservation = () => {
        if ( reserveStartDate && name && reserveStartTime && citizenID && reserveStartDate && reserveEndDate) {
            const startDateTime = dayjs(`${reserveStartDate.format("YYYY-MM-DD")} ${reserveStartTime?.format("HH:mm")}`);
            const endDateTime = dayjs(`${reserveEndDate.format("YYYY-MM-DD")} ${reserveEndTime?.format("HH:mm")}`); 
            
            const item:ReservationItem = {
                name: name,
                cowork: model,
                id: citizenID,
                ReservationStartDate: dayjs(reserveStartDate).format("YYYY/MM/DD"),
                ReservationEndDate: dayjs(reserveStartDate).format("YYYY/MM/DD"),
                ReservationStartTime: dayjs(reserveStartTime).format("HH:mm"),
                ReservationEndTime: dayjs(reserveEndTime).format("HH:mm"),
                duration: endDateTime.diff(startDateTime, 'minute')
             } 
             dispatch(addReservation(item));
         }
 
     }
     const [reserveStartDate, setReserveStartDate] = useState<Dayjs | null>(null);
     const [reserveEndDate, setReserveEndDate] = useState<Dayjs | null>(null);
     const [reserveStartTime, setReserveStartTime] = useState<Dayjs | null>(null);
     const [reserveEndTime, setReserveEndTime] = useState<Dayjs | null>(null);
     const [name, setName] = useState<string | null>("");
     const [citizenID, setCitizenID] = useState<string | null>("");


    return(
        <main className="w-full flex flex-col items-center space-y-4">
            <div className="w-[50%] flex flex-col space-y-4 bg-white text-black-600 border border-gray-600
            font-semibold m-20 p-10 rounded-[5%] flex justify-center items-center shadow-xl">
            <div className="text-x1 font-medium text-black text-3xl">Co-Workingspace Reservation</div>
            {
                    model?<div>
                            <div>Coworkingspace : {model} </div>
                        </div>
                    :
                    <div>
                        <Link href={"/coworkingspace"}>
                            <button className="block rounded-md bg-sky-500 hover:bg-indigo-500 delay-100 px-3 py-2 shadow-sm"
                            onClick={makeReservation}>
                            Select Coworkingspace
                            </button>
                        </Link>
                    </div>
                }
            <form>
                <br/>
                
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
                    <br/>
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
                    <div className="text-md text-left text-gray-600">Start Time</div>
                    <DateTimeReserve onDateChange={(value:Dayjs)=>{setReserveStartDate(value)}} onTimeChange={(value:Dayjs)=>{setReserveStartTime(value)}} />
                    <div className="text-md text-left text-gray-600">Start Date</div>
                    <DateTimeReserve onDateChange={(value:Dayjs)=>{setReserveEndDate(value)}} onTimeChange={(value:Dayjs)=>{setReserveEndTime(value)}} />
                </div>
                <button type="submit" className="block rounded-md bg-sky-500 hover:bg-indigo-500 delay-100 px-3 py-2 shadow-sm"
                onClick={makeReservation}>
                    Reserve Co-workingspace
                </button>
            
                <div>
                </div>
            </div>
        </main>
        );
}