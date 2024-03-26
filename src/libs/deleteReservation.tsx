import coworkingspaces from "@/db/models/coworkingspaces";
import { ReservationItem } from "../../interface";
import Reservation from "@/app/reservations/page";
import { useSession } from "next-auth/react";
import { ReservationItem2 } from "../../interface";

export default async function deleteReservations(token:string|undefined, id:string) {
    // console.log(reservationItems2.coworkingspace.id);
    const response = await fetch(`https://presentation-day-1-backendprojingjing.vercel.app/api/v1/reservations/${id}`,{
        method: "DELETE",
        headers: {
            "Content-type":"application/json",
            authorization: `Bearer ${token}`,
        },
    })

    if (!response.ok) {
        throw new Error('cannot delete reservation')
    }

    return await response.json()
}


