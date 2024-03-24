import DateReserve from "@/components/DateReserve";
import {Select,MenuItem} from "@mui/material";
import TimeReserve from '@/components/TimeReserve'
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
            <div className="text-x1 font-medium text-black text-3xl">Co-Workingspace Reservation</div>
            <br/>
                <label htmlFor="Name-Lastname" className="Name-Lastname" id="reserveform">Name-Lastname</label>
                <input type="text" id="Name-Lastname" placeholder="Name-Lastname" 
                className="MuiInput-input border-2 p-3"></input>
                <br/>

                <label htmlFor="Citizen ID" className="Citizen ID" id="reserveform">Citizen ID</label>
                <input type="text" id="Citizen ID" placeholder="Citizen ID" 
                className="MuiInput-input border-2 p-3"></input>
                <br/>
                
                <label htmlFor="coworkingspace" className="MuiSelect-select'" id="reserveform">Coworkingspace</label>
                <Select variant="standard" name="coworkingspace" id="coworkingspace"
                className="h-[2em] w-[200px] border-2 p-3">
                <MenuItem value="Cospace1">Co-working space1 </MenuItem>
                <MenuItem value="Cospace2">Co-working space2 </MenuItem>
                <MenuItem value="Cospace3">Co-working space3 </MenuItem>
                </Select>
                <br/>
                <label htmlFor="Reservation Date" className="Reservation Date" id="reserveform">Reservation Date</label>
                <div className="w-fit space space-y-1">
                    <div className="text-md text-left text-gray-600"></div>
                    <DateReserve/>
                </div>

                <label htmlFor="Reservation Time" className="Reservation Time" id="reserveform">Reservation Time</label>
                {/* <div className="flex flex-row"> */}
                    <div> Start time </div>
                    <TimeReserve/>
                    <div className="mx-5"> End time</div>
                    <TimeReserve/>
                {/* </div> */}
                <br />             

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