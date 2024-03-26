'use client'
import { Link } from "@mui/material";
import { useState } from "react"; // Import useState hook
import { ReservationItem2, ReservationJson } from "../../interface";
import { removeReservation } from "@/redux/features/reserveSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { useAppSelector } from "@/redux/store";
import deleteReservations from "@/libs/deleteReservation";
import { useSession } from "next-auth/react";

export default function ReservationList({ reservationJson }: { reservationJson: ReservationJson }) {
    const [reservations, setReservations] = useState(reservationJson.data);
    const { data: session } = useSession();
    const dispatch = useDispatch<AppDispatch>();

    console.log(session?.user.token);

    // Function to remove reservation from UI
    const handleRemoveReservation = (reservationId: string) => {
        dispatch(removeReservation(reservationId));
        deleteReservations(session?.user.token, reservationId);
        setReservations((prevReservations) => prevReservations.filter((reservation) => reservation._id !== reservationId));
    };

    return (
        <div className="flex justify-center items-center">
            <div className="w-full ml-5 mr-5">
                <div className="mt-10 text-black text-2xl">You have {reservations.length} reservation!</div>
                <br/>
                <div className="overflow-x-auto w-[100%]">
                    <table className="w-full table-auto text-black">
                        <thead>
                            <tr>
                                <th className="px-4 py-2">Coworking Space</th>
                                <th className="px-4 py-2">Reservation Date</th>
                                <th className="px-4 py-2">Province</th>
                                <th className="px-4 py-2">Telephone Number</th>
                                <th className="px-4 py-2">Duration</th>
                                <th className="px-4 py-2">Member Since</th>
                                <th className="px-4 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reservations.map((reservationItem2: ReservationItem2) => (
                                <tr key={reservationItem2.createAt} className="bg-gray-100 text-black">
                                    <td className="border px-4 py-2">{reservationItem2.coworkingspace.name}</td>
                                    <td className="border px-4 py-2">{reservationItem2.reservationDate}</td>
                                    <td className="border px-4 py-2">{reservationItem2.coworkingspace.province}</td>
                                    <td className="border px-4 py-2">{reservationItem2.coworkingspace.telephone_number}</td>
                                    <td className="border px-4 py-2">{reservationItem2.timereservation}</td>
                                    <td className="border px-4 py-2">{reservationItem2.createAt.toString()}</td>
                                    <td className="border px-4 py-2">
                                        <button
                                            className="bg-red-500 text-white font-semibold py-1 px-2 m-1 rounded-md hover:bg-white hover:text-red-600 border border-red-600"
                                            onClick={() => handleRemoveReservation(reservationItem2._id)}
                                        >
                                            Remove
                                        </button>
                                        <Link href={`/edit?id=${reservationItem2._id}`}>
                                            <button className="bg-yellow-400 text-black font-semibold py-1 px-2 m-1 rounded-md hover:bg-white hover:text-yellow-600 border border-yellow-600">
                                                Edit
                                            </button>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
