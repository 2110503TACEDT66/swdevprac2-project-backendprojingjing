import { User } from "../../interface"

export default async function userRegister(userItem:User){
   const response = await fetch(`https://presentation-day-1-backendprojingjing.vercel.app/api/v1/auth/register`,{
      method: "POST",
      headers: {
         "Content-type":"application/json"
    },
    body: JSON.stringify({
      name: userItem.name,
      email: userItem.email,
      telephone_number:userItem.telephone_number,
      password: userItem.password,
      
      
    })
   })
   if(!response.ok){
      throw new Error("Cannot create booking")
   }
   

   return await response.json()
}
