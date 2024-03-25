"use client"
import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Select, MenuItem} from '@mui/material'
import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';


export default function DateReserve(){
    return(
        <div className="bg-white rounded-1g space-x-5 space-y-2 w-fit px-10 py-5
        flex flex-row justify-center">
            <table className="table-auto border-separate border-spacing-2 border-2
                p-5 pr-10 w-3/6">
                <tbody>
                    <tr><td> 
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker className="bg-white "/>
                    </LocalizationProvider>
                         </td><td>
                            
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['TimePicker']}>
                    <TimePicker label="Basic time picker" />
                    </DemoContainer>
                    </LocalizationProvider>
                            </td> </tr>

                </tbody>
            </table>
        </div>
    )
}