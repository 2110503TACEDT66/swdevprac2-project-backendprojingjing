"use client"
// import DateTimeReserve from "@/components/DateTimeReserve";
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
import { TimePicker } from "@mui/x-date-pickers";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { useSession } from "next-auth/react";
import createReservation from "@/libs/createReservation";

export default function Reservation(){

    const {data: session} = useSession()
    const urlParams=useSearchParams()
    const cid = urlParams.get('id')
    const user = session?.user.email
    const name = urlParams.get('model')

    const dispatch = useDispatch<AppDispatch>();
    const [hasReserved, setHasReserved] = useState(false)
    
    
    
    const makeReservation = async () => {
        const dayString = reservationDate?.format('YYYY-MM-DDTHH:mm:ss.SSSZ')
        console.log(dayString)
        console.log(timereservation)
            if (cid && name && user && reservationDate && timereservation) {
                const item: ReservationItem = {
                    user: user,
                    coworkingId: cid,
                    coworkingName: name,
                    reservationDate: dayString,
                    timereservation: timereservation,
                };
                
                const reserving = await createReservation(session.user.token, item);
                console.log("Reserving result:", reserving);
                console.log('before');
                if (reserving.success == true) {
                    console.log('hihih');
                    setHasReserved(true)
                }
                else if (reserving.success == false) {
                    alert(reserving.message)
                }
            }
            

        }
 
    const [ reservationDate, setReservationDate ] = useState<Dayjs| null>(null)
    const [ timereservation, setTimereservation ] = useState<string| null>(null)
    const [time, setTime] = useState<string | null>("");

    return(
        <main className="w-full flex flex-col items-center space-y-4 bg-gray-300">
            <div className="w-[50%] flex flex-col space-y-4 bg-white text-black-600 ring-4 ring-gray-700 border border-gray-600 mx-[60%]
            font-semibold m-20 p-10 rounded-[5%] flex justify-center items-center shadow-xl bg-white">
            <div className="text-x1 font-medium text-black text-3xl">Co-Workingspace Reservation</div>
            {
                name?<div>
                        <div className="text-black">Coworkingspace : {name} </div>
                    </div>
                :
                <div>
                    <Link href={"/coworkingspace"}>
                        <button className="block rounded-md bg-red-400 hover:bg-red-500 hover:text-white delay-100 px-3 py-2 shadow-sm"
                        onClick={makeReservation}>
                        Select Coworkingspace
                        </button>
                    </Link>
                </div>
            }
        
            <div className='w-full flex flex-col items-center space-y-2'>
                <div className="text-center m-2">
            <br/>
            <label htmlFor="Reservation Date" className="Reservation Date" id="reserveform">Reservation Date and Time</label>
                        
            <div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker className="bg-white "
                value={reservationDate}
                onChange={(value)=>{setReservationDate(value); /*onDateChange(value)*/}}
                />
                </LocalizationProvider>
            </div>
        
            <form>
                <TextField
                    variant='standard'
                    margin="normal"
                    fullWidth
                    id="time"
                    label="Time"
                    name="time"
                    value={time}
                    placeholder="00:00-03:00"
                    onChange={(e) => {
                    // console.log('aaaaaaaaaaaaaaaaaasdasadasdasdas'); // Optional: log the input value
                    setTime(e.target.value);
                    setTimereservation(e.target.value);
                    }}
                />
            </form>

        </div>
                </div>
                <button type="submit" className="block rounded-md bg-red-400 hover:bg-red-500 hover:text-white delay-100 px-3 py-2 shadow-sm"
                onClick={makeReservation}> 
                {
                    hasReserved?'Complete!':'Reserve Co-workingspace'
                }
                    
                </button>
            
                <div>
                </div>
            </div>
        </main>
        );
}