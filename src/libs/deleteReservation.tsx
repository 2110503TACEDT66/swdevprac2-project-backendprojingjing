export default async function deleteReservation(token:string|undefined, id:string) {
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
    alert('Success!')
    return await response.json()
}


