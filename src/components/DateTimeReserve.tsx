// "use client"
// import { DatePicker } from "@mui/x-date-pickers"
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
// import { Select, MenuItem} from '@mui/material'
// import * as React from 'react';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { TimePicker } from '@mui/x-date-pickers/TimePicker';
// import {useState } from 'react'
// import { Dayjs } from 'dayjs'

// export default function DateReserve({onDateChange, onTimeChange} : {onDateChange: Function,onTimeChange: Function}){

//     const [ reserveDate, setReserveDate ] = useState<Dayjs| null>(null)
//     const [ reserveTime, setReserveTime ] = useState<Dayjs| null>(null)
    
//     return(
//         <div className="text-center m-2">
//                 <br/>
//                 <label htmlFor="Reservation Date" className="Reservation Date" id="reserveform">Reservation Date and Time</label>
                            
//                 <div>
//                     <LocalizationProvider dateAdapter={AdapterDayjs}>
//                     <DatePicker className="bg-white "
//                     value={reserveDate}
//                     onChange={(value)=>{setReserveDate(value); onDateChange(value)}}
//                     />
//                     </LocalizationProvider>
//                 </div>
            
//                 <div>
//                     <LocalizationProvider dateAdapter={AdapterDayjs}>
//                     <DemoContainer components={['TimePicker']}>
//                     <TimePicker label="Basic time picker" 
//                     value={reserveTime}
//                     onChange={(value)=>{setReserveTime(value); onTimeChange(value)}}
//                     />
//                     </DemoContainer>
                    
//                     </LocalizationProvider>
//                 </div>
//         </div>
//     )
// }