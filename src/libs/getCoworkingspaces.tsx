export default async function getCoworkingspaces() {
    await new Promise((resolve)=>setTimeout(resolve,1000))
    const response = await fetch("http://localhost:5000/api/v1/coworkingspaces/" ,{cache:"no-store"})
    if(!response.ok){
        throw new Error("Failed to fetch coworkingspaces")
    }
    return await response.json()
}