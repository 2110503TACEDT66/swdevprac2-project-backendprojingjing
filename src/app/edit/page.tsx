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
import { Link } from "@mui/material";
import { TimePicker } from "@mui/x-date-pickers";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { useSession } from "next-auth/react";
import createReservation from "@/libs/createReservation";
import editReservation from "@/libs/editReservation";

export default function EditReservePage(){

    const [edited,setEdited] = useState(false)
    const {data: session} = useSession()
    console.log('Session ', session);
    if (!session || !session.user.token) {
        console.log('no cond');
        return null
    }
    else {
        console.log('hi');
    }

    const urlParams=useSearchParams()
    const reservationId = urlParams.get('id')
    console.log(reservationId);

    const [ reservationDate, setReservationDate ] = useState<Dayjs| null>(null)
    const [ timereservation, setTimereservation ] = useState<string| null>(null)
    
    const dayString = reservationDate?.format('YYYY-MM-DDTHH:mm:ss.SSSZ')

    if (reservationDate) {
        console.log('hav reserveDate' + reservationDate);
    }
    if (timereservation) {
        console.log('hav timereser' + timereservation);
    }

    const editing = async () => {
        
        if (reservationDate && timereservation) {
            console.log('sad a');
            console.log('this is ' + (reservationDate).format('YYYY-MM-DDTHH:mm:ss.SSSZ'))
            console.log('and this is ' + timereservation)
            const updateReservation = await editReservation(session.user.token,reservationId,(reservationDate).format('YYYY-MM-DDTHH:mm:ss.SSSZ'),timereservation)
            
            if (updateReservation.success == true) setEdited(true)
        }
    }
 
   
    const [time, setTime] = useState<string | null>("");
    

    return(
        <main className="w-full flex flex-col items-center space-y-4 bg-gray-300">
            <div className="w-[50%] flex flex-col space-y-4 bg-white text-black-600 ring-4 ring-gray-700 border border-gray-600 mx-[60%]
            font-semibold m-20 p-10 rounded-[5%] flex justify-center items-center shadow-xl bg-white">
            <div className="text-x1 font-medium text-black text-3xl">Co-Workingspace Reservation</div>
            
            {
                /*name?<div>
                        <div className="text-black">Coworkingspace : {name} </div>
                    </div>
                :
                <div>
                    { <Link href={"/coworkingspace"}>
                        <button className="block rounded-md bg-red-400 hover:bg-red-500 hover:text-white delay-100 px-3 py-2 shadow-sm"
                        onClick={makeReservation}>
                        Select Coworkingspace
                        </button>
                    </Link> }
                </div>*/
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
                onClick={editing}> 
                {
                    edited?'Complete!':'Edit time'
                }
                    
                </button>
            
                <div>
                </div>
            </div>
        </main>
        );
}