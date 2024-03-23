import { resolve } from "path"

export default async function getCoworkingspace(id:string) {
    await new Promise((resolve)=>setTimeout(resolve,2000))
    const response = await fetch(`http://localhost:5000/api/v1/coworkingspaces/${id}`)
    if(!response.ok){
        throw new Error("Failed to fetch coworkingspace")
    }
    return await response.json()
}