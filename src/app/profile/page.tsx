import {Select,MenuItem} from "@mui/material";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";
import Link from "next/link";

export default async function Profile(){

    const session = await getServerSession(authOptions)
    if (!session || !session.user.token) return null

    const profile = await getUserProfile(session.user.token)
    var createdAt = new Date(profile.data.createdAt)



    return(
        <main>
                <div>
                <table className="table-auto border-separate border-spacing-2 mt-[5%] border-2
                p-5 pr-10 w-3/6 text-black ml-[5%] bg-gray-100">
                <tbody>
                    <tr><td> Username:  </td><td>{profile.data.name}</td> </tr>
                    <tr><td> ID:  </td><td>{profile.data._id}</td> </tr>
                    <tr><td> Email:  </td><td>{profile.data.email}</td> </tr>
                    <tr><td> Tel:  </td><td>{profile.data.telephone_number} </td></tr>
                    <tr><td> Member Since:  </td><td> {createdAt.toString()}</td> </tr>
                    <tr><td colSpan={2}>
                    <Link href="/api/auth/signout" className=''>
                        <div>
                        <button type="submit" className="block rounded-md bg-red-400 hover:bg-red-500 hover:text-white delay-100 px-3 py-2 shadow-sm ml-[10px] mt-[5px]">
                        Log out
                        </button>
                        </div>
                </Link>
                    </td></tr>
                </tbody>
            </table>
            </div>
        </main>
    );
}
