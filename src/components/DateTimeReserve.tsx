"use client"
import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Select, MenuItem} from '@mui/material'
import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import {useState } from 'react'
import { Dayjs } from 'dayjs'

export default function DateReserve({onDateChange, onTimeChange, onLocationChange} : {onDateChange: Function,onTimeChange: Function, onLocationChange: Function}){

    const [ reserveDate, setReserveDate ] = useState<Dayjs| null>(null)
    const [ reserveTime, setReserveTime ] = useState<Dayjs| null>(null)
    const [ location, setLocation ] = useState('')

    return(
        <div className="text-center m-2">
            
            <br/>
                
                <Select variant="standard" name="coworkingspace" id="coworkingspace" value={location}
                onChange={(e)=>{setLocation(e.target.value); onLocationChange(e.target.value);}}
                className="h-[2em] w-[200px] border-2 p-3">
                <MenuItem value="Nexus CoLab">Nexus CoLab </MenuItem>
                <MenuItem value="Hive Workspace">Hive Workspace </MenuItem>
                <MenuItem value="Innovate Hub">Innovate Hub </MenuItem>
                <MenuItem value="FlexiSpaceCospace2">FlexiSpace </MenuItem>
                <MenuItem value="CollaboraZone">CollaboraZone </MenuItem>
                <MenuItem value="Unity Workspace">Unity Workspace </MenuItem>
                <MenuItem value="Synergy Station">Synergy Station </MenuItem>
                <MenuItem value="Innovate Loft">Innovate Loft </MenuItem>
                <MenuItem value="Collaborate Corner">Collaborate Corner </MenuItem>
                <MenuItem value="Harmony Hub">Harmony Hub </MenuItem>
                </Select>
                <br/>
                <br/>
                <label htmlFor="Reservation Date" className="Reservation Date" id="reserveform">Reservation Date and Time</label>
                            
                <div>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker className="bg-white "
                    value={reserveDate}
                    onChange={(value)=>{setReserveDate(value); onDateChange(value)}}
                    />
                    </LocalizationProvider>
                </div>
            
                <div>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['TimePicker']}>
                    <TimePicker label="Basic time picker" 
                    value={reserveTime}
                    onChange={(value)=>{setReserveTime(value); onTimeChange(value)}}
                    />
                    </DemoContainer>
                    
                    </LocalizationProvider>
                </div>
        </div>
    )
}