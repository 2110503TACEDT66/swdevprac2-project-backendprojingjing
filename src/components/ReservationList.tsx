'use client'
import { Link } from "@mui/material";
import { ReservationItem2, ReservationJson } from "../../interface";
import { removeReservation } from "@/redux/features/reserveSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { useAppSelector } from "@/redux/store";
import deleteReservations from "@/libs/deleteReservation";
import { useSession } from "next-auth/react";

export default function ReservationList({reservationJson}:{reservationJson:ReservationJson}) {

    // const ReservationItems = useAppSelector((state)=> state.reserveSlice.reservationItems)
    const {data: session} = useSession()
    const reservingJsonReady = reservationJson
    const dispatch = useDispatch<AppDispatch>()
    // = async () => {

    // }
    console.log(session?.user.token);

    return (
        <>
        You have {reservingJsonReady.count} reservation!
        <div className="flex flex-col justify-center items-center w-[50%]">
            {
                reservingJsonReady.data.map((reservationItem2:ReservationItem2)=>(
                <div className="bg-slate-200 rounded p-3" key={reservationItem2.createAt}>
                    <div className="text-xl">{reservationItem2.coworkingspace.name}</div>    
                    <div className="text-md">Reserve at {reservationItem2.reservationDate}</div>    
                    <div className="text-md">Province {reservationItem2.coworkingspace.province}</div>    
                    <div className="text-md">Telephone_number {reservationItem2.coworkingspace.telephone_number}</div>    
                    <div className="text-md">Duration {reservationItem2.timereservation}</div>    
                    <div className="text-md">MemberSince {reservationItem2.createAt.toString()}</div>    
                    <button className="bg-red-500 text-white border border-transparent font-semibold py-2 px-2 m-3
                    hover:bg-white hover:text-red-600 border-red-600 rounded-md shadow-lg shadow-blue-500/50 w-[100px]"
                    onClick={() => {dispatch(removeReservation(reservationItem2._id)), deleteReservations(session?.user.token,reservationItem2._id)}}>
                        Remove
                    </button>
                    <Link href={`/edit?id=${reservationItem2._id}`}>
                    <button className="bg-yellow-400 text-black border border-transparent font-semibold py-2 px-2 m-3
                    hover:bg-white hover:text-yellow-600 border-red-600 rounded-md shadow-lg shadow-blue-500/50 w-[100px]"
                    >
                        Edit
                    </button>
                    </Link>
                    
            </div>   
                ))
            }
        </div>
        </>
    )

}