import { Link } from "@mui/material";
import { ReservationItem2, ReservationJson } from "../../interface";
import { removeReservation } from "@/redux/features/reserveSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { useAppSelector } from "@/redux/store";

export default async function ReservationList({reservationJson}:{reservationJson:Promise<ReservationJson>}) {

    // const ReservationItems = useAppSelector((state)=> state.reserveSlice.reservationItems)
    const reservingJsonReady = await reservationJson
    // const dispatch = useDispatch<AppDispatch>()

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
                    >
                        Remove
                    </button>
            </div>   
                ))
            }
        </div>
        </>
    )

}