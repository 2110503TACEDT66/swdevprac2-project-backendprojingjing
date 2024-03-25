export default async function getCoworkingspaces() {
    await new Promise((resolve)=>setTimeout(resolve,1000))
    const response = await fetch("https://presentation-day-1-backendprojingjing.vercel.app/api/v1/coworkingspaces/" ,{cache:"no-store"})
    if(!response.ok){
        throw new Error("Failed to fetch coworkingspaces")
    }
    return await response.json()
}