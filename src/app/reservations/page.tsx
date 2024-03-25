import DateTimeReserve from "@/components/DateTimeReserve";
import {Select,MenuItem} from "@mui/material";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";

export default async function Reservation(){

    const session = await getServerSession(authOptions)
    if (!session || !session.user.token) return null

    const profile = await getUserProfile(session.user.token)
    var createdAt = new Date(profile.data.createdAt)

    return(
        <main className="flex flex-row ">


            <form className="w-[100%] flex flex-col space-y-4 bg-white text-black-600 border border-gray-600
            font-semibold m-20 p-10 rounded-[5%] flex justify-center items-center shadow-xl" >
                <div className="w-fit space space-y-1">
                    <div className="text-md text-left text-gray-600"></div>
                    <DateTimeReserve/>
                </div>
                <button type="submit" className="block rounded-md bg-sky-500 hover:bg-indigo-500 delay-100 px-3 py-2 shadow-sm">
                    Reserve Co-workingspace
                </button>
            </form>
                <div>
                <table className="table-auto border-separate border-spacing-2 mt-[45%] border-2
                p-5 pr-10 w-3/6">
                <tbody>
                    <tr><td> Username:  </td><td>{profile.data.name}</td> </tr>
                    <tr><td> ID:  </td><td>{profile.data._id}</td> </tr>
                    <tr><td> Email:  </td><td>{profile.data.email}</td> </tr>
                    <tr><td> Tel:  </td><td>{profile.data.telephone_number} </td></tr>
                    <tr><td> Member Since:  </td><td> {createdAt.toString()}</td> </tr>
    
                </tbody>
            </table>
                </div>
        </main>
    );
}