import { ReservationItemEdit } from "../../interface"


export default async function editReservation(token: string,reservationId: string, reservationDate:string,timereservation:string){
   const response = await fetch(`https://presentation-day-1-backendprojingjing.vercel.app/api/v1/reservations/${reservationId}`,{
       method: "PUT",
       headers: {
         "Content-type":"application/json",
         authorization: `Bearer ${token}`,
       },body: JSON.stringify({
         reservationDate,
         timereservation
      }),
    })
    
    if(!response.ok){
        throw new Error("Failed to editing booking")
    }

    return await response.json()
}
