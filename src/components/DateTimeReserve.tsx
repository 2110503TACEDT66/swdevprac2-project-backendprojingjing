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
        <div className="text-center m-2">
            <div className="text-x1 font-medium text-black text-3xl">Co-Workingspace Reservation</div>
            <br/>
                <label htmlFor="Name-Lastname" className="Name-Lastname" id="reserveform">Name-Lastname</label>
                <input type="text" id="Name-Lastname" placeholder="Name-Lastname" 
                className="MuiInput-input border-2 p-3"></input>
                <br/>
                <br/>
                <label htmlFor="Citizen ID" className="Citizen ID" id="reserveform">Citizen ID</label>
                <input type="text" id="Citizen ID" placeholder="Citizen ID" 
                className="MuiInput-input border-2 p-3"></input>
                <br/>
                <br/>
                <label htmlFor="coworkingspace" className="MuiSelect-select'" id="reserveform">Coworkingspace</label>
                <Select variant="standard" name="coworkingspace" id="coworkingspace"
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
                    <DatePicker className="bg-white "/>
                    </LocalizationProvider>
                </div>
            
                <div>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['TimePicker']}>
                    <TimePicker label="Basic time picker" />
                    </DemoContainer>
                    </LocalizationProvider>
                </div>
        </div>
    )
}