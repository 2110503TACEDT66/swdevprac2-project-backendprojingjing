import coworkingspaces from "@/db/models/coworkingspaces";
import { ReservationItem } from "../../interface";
import Reservation from "@/app/reservations/page";
import { ReservationItem2 } from "../../interface";

export default async function deleteReservation(token:string, id:string) {
    const response = await fetch(`https://presentation-day-1-backendprojingjing.vercel.app/api/v1/reservations/${id}`,{
        method: "DELETE",
        headers: {
            "Content-type":"application/json",
            authorization: `Bearer ${token}`,
        },
    })

    if (!response.ok) {
        throw new Error('cannot create reservation')
    }

    return await response.json()
}


