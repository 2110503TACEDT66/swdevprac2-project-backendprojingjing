"use client"
import { removeReservation } from "@/redux/features/reserveSlice" 
import { useAppSelector, AppDispatch } from "@/redux/store"
import { useDispatch } from "react-redux"

export default function ReservationList(){
    const ReservationItems = useAppSelector((state)=> state.reserveSlice.reservationItems)
    const dispatch = useDispatch<AppDispatch>()
    return(
        <>
        {
            ReservationItems.map((reservationItems) => (
                
                <div key={reservationItems.id} className="bg-slate-200 p-3 flex flex-col items-start space-y-2 m-4">
                    
                    <div className="text-3xl font-bold">{reservationItems.name}</div>
                    <div></div>
                    <div>CITIZEN ID: {reservationItems.id}</div>
                    <div>CoWorkingSpace: {reservationItems.cowork}</div>
                    <div>Date: {reservationItems.ReservationDate}</div>
                    <div>Time: {reservationItems.ReservationTime}</div>
                    <button className="bg-red-500 text-white border border-transparent font-semibold py-2 px-2 m-3
                    hover:bg-white hover:text-red-600 border-red-600 rounded-md shadow-lg shadow-blue-500/50 w-[100px]"
                    onClick={() => dispatch(removeReservation(reservationItems.id))}>
                        Remove
                    </button>

                </div>
            )
        )}
        </>
    )
}