import Link from "next/link"
import { ReservationItem, ReservationJson } from "../../../interface"
import ReservationList from "@/components/ReservationList";
import getReservations from "@/libs/getReservations";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function MyBooking() {
    const session = await getServerSession(authOptions)
    if (!session || !session.user.token) return null

    const reservations = getReservations(session.user.token)

    return (
        <main>
            <ReservationList reservationJson={reservations}/>
            
        </main>
    )
}