import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ReservationItem } from "../../../interface";

type Reservestate = {
    reservationItems:ReservationItem[]
}

const initialState:Reservestate = {reservationItems:[]}

export const reserveSlice = createSlice({
    name:"reserve",
    initialState,
    reducers:{
        addReservation:(state,action:PayloadAction<ReservationItem>)=>{
            const remain = state.reservationItems.filter(item => item.id !== action.payload.id);
            state.reservationItems = remain
            state.reservationItems.push(action.payload)
        },
        removeReservation:(state,action:PayloadAction<string>)=>{
            const remainItems = state.reservationItems.filter(obj =>{
                return ((obj.id !== action.payload)) &&
                    !((obj.duration)>180 || obj.duration<=0)
            })
            state.reservationItems = remainItems
        }
    }
})
export const { addReservation,removeReservation } = reserveSlice.actions
export default reserveSlice.reducer