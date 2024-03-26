import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ReservationItem } from "../../../interface";
import deleteReservations from "@/libs/deleteReservation";
import { useSession } from "next-auth/react";

type Reservestate = {
    reservationItems:ReservationItem[]
}

const initialState:Reservestate = {reservationItems:[]}


export const reserveSlice = createSlice({
    name:"reserve",
    initialState,
    reducers:{
        addReservation:(state,action:PayloadAction<ReservationItem>)=>{
            const remain = state.reservationItems.filter(item => item.coworkingId !== action.payload.coworkingId);
            state.reservationItems = remain
            state.reservationItems.push(action.payload)
        },
        removeReservation:(state,action:PayloadAction<string>)=>{
            console.log('now');
            const remainItems = state.reservationItems.filter(obj =>{
                return ((obj.coworkingId !== action.payload))
            })
            state.reservationItems = remainItems
            
            console.log(state.reservationItems);
        }
    }
})
export const { addReservation,removeReservation } = reserveSlice.actions
export default reserveSlice.reducer