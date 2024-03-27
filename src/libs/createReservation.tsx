import coworkingspaces from "@/db/models/coworkingspaces";
import { ReservationItem } from "../../interface";
import Reservation from "@/app/reservations/page";

export default async function createReservation(token:string, reservationItems: ReservationItem) {
    const response = await fetch(`https://presentation-day-1-backendprojingjing.vercel.app/api/v1/coworkingspaces/${reservationItems.coworkingId}/reservations/`,{
        method: "POST",
        headers: {
            "Content-type":"application/json",
            authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            reservationDate: reservationItems.reservationDate,
            timereservation: reservationItems.timereservation,
        }),
    })

    if (!response.ok) {
        // throw new Error('cannot create reservation')
    }

    return await response.json()
}


