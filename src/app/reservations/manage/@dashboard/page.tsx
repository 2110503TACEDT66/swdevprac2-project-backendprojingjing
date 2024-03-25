import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"
import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"
import getUserProfile from "@/libs/getUserProfile"
import coworkingspaces from "@/db/models/coworkingspaces"
import { dbConnect } from "@/db/dbConnect"

export default async function DashboardPage(){

    const addCoworkingspaces = async (addCoworkingspacesForm:FormData)=>{
        "use server"
        const name = addCoworkingspacesForm.get("name")
        const address = addCoworkingspacesForm.get("address")
        const district = addCoworkingspacesForm.get("district")
        const province = addCoworkingspacesForm.get("province")
        const postalcode = addCoworkingspacesForm.get("postalcode")
        const telephone_number = addCoworkingspacesForm.get("telephone_number")
        const opentime = addCoworkingspacesForm.get("opentime")
        const closetime = addCoworkingspacesForm.get("closetime")
        const picture = addCoworkingspacesForm.get("picture")
        const star = addCoworkingspacesForm.get("star")
    

    try{
        await dbConnect() //เรียก dbConnect เพื่อเชื่อมต่อ กับ Backend Database
        const cowork = await coworkingspaces.create({
            "name": name,
            "address": address,
            "district": district,
            "province": province,
            "postalcode": postalcode,
            "telephone_number": telephone_number,
            "opentime": opentime,
            "closetime": closetime,
            "picture": picture,
            "star": star
        })
    }catch(error){
        console.log(error)
    }
    revalidateTag("coworkingspaces")
    redirect("/coworkingspace")
}

    const session = await getServerSession(authOptions)
    if(!session|| !session.user.token) return null
    
    const profile = await getUserProfile(session.user.token)
    var createdAt = new Date(profile.data.createdAt);

    return(
        <main className="bg-slate-100 text-black m-5 p-5">
            <div className="text-2xl">{profile.data.name}</div>
            <table className="table-auto border-separate border-spacing-2">
                <tbody>
                    <tr><td> Username:  </td><td>{profile.data.name}</td> </tr>
                    <tr><td> ID:  </td><td>{profile.data._id}</td> </tr>
                    <tr><td> Email:  </td><td>{profile.data.email}</td> </tr>
                    <tr><td> Tel:  </td><td>{profile.data.telephone_number} </td></tr>
                    <tr><td> Member Since:  </td><td> {createdAt.toString()}</td> </tr>
                </tbody>
            </table>
            {
                (profile.data.role=="admin")?
                <form action={addCoworkingspaces}>
                    <div className="text-xl text-blue-700">Create CoworkingSpace</div>
                    <div className="flex items-center w-1/2 my-2">
                        <label className="w-auto block text-gray-700 pr-4" htmlFor="name">
                        Name</label>
                        <input type="text" required id="name" name="name" placeholder="Name"
                        className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus: outline-none focus: border-blue-400"/>
                    </div>
                    <div className="flex items-center w-1/2 my-2">
                        <label className="w-auto block text-gray-700 pr-4" htmlFor="address">
                        Address</label>
                        <input type="text" required id="address" name="address" placeholder="Address"
                        className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus: outline-none focus: border-blue-400"/>
                    </div>
                    <div className="flex items-center w-1/2 my-2">
                        <label className="w-auto block text-gray-700 pr-4" htmlFor="district">
                        District</label>
                        <input type="text" required id="district" name="district" placeholder="District"
                        className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus: outline-none focus: border-blue-400"/>
                    </div>
                    <div className="flex items-center w-1/2 my-2">
                        <label className="w-auto block text-gray-700 pr-4" htmlFor="province">
                        Province</label>
                        <input type="text" required id="province" name="province" placeholder="Province"
                        className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus: outline-none focus: border-blue-400"/>
                    </div>
                    <div className="flex items-center w-1/2 my-2">
                        <label className="w-auto block text-gray-700 pr-4" htmlFor="postalcode">
                        PostalCode</label>
                        <input type="text" required id="postalcode" name="postalcode" placeholder="PostalCode"
                        className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus: outline-none focus: border-blue-400"/>
                    </div>
                    <div className="flex items-center w-1/2 my-2">
                        <label className="w-auto block text-gray-700 pr-4" htmlFor="telephone_number">
                        Telephone_number</label>
                        <input type="text" required id="telephone_number" name="telephone_number" placeholder="Telephone_number"
                        className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus: outline-none focus: border-blue-400"/>
                    </div>
                    <div className="flex items-center w-1/2 my-2">
                        <label className="w-auto block text-gray-700 pr-4" htmlFor="opentime">
                        Opentime</label>
                        <input type="text" required id="opentime" name="opentime" placeholder="Opentime"
                        className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus: outline-none focus: border-blue-400"/>
                    </div>
                    <div className="flex items-center w-1/2 my-2">
                        <label className="w-auto block text-gray-700 pr-4" htmlFor="closetime">
                        Closetime</label>
                        <input type="text" required id="closetime" name="closetime" placeholder="Closetime"
                        className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus: outline-none focus: border-blue-400"/>
                    </div>
                    <div className="flex items-center w-1/2 my-2">
                        <label className="w-auto block text-gray-700 pr-4" htmlFor="picture"> 
                        Picture</label>
                        <input type="text" required id="picture" name="picture" placeholder="URL"
                        className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus: outline-none focus: border-blue-400"/>
                    </div>
                    <div className="flex items-center w-1/2 my-2">
                        <label className="w-auto block text-gray-700 pr-4" htmlFor="star"> 
                        Star</label>
                        <input type="number" required id="star" name="star" placeholder="5"
                        className="bg-white border-2 border-gray-200 rounded w-auto p-2 text-gray-700 focus: outline-none focus: border-blue-400" 
                        max="5"/>
                    </div>
                    
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700
                        text-white p-2 rounded">Add New CoworkingSpace</button>
                </form>
                :null
            }
        </main>
    )
}