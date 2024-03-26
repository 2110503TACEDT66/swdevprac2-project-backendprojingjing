'use client'
import * as React from 'react';
import { useState, useEffect } from 'react';
import { ReservationItem2, ReservationJson } from "../../interface";
import { removeReservation } from "@/redux/features/reserveSlice";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/redux/store";
import { useSession } from 'next-auth/react';
import { useSearchParams } from "next/navigation";
import dayjs, { Dayjs } from "dayjs";
import { AppDispatch } from "@/redux/store";
import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Link from "next/link";
import deleteReservation from '@/libs/deleteReservation';

export default function ReservationList({ reservationJson }: { reservationJson: ReservationJson }) {
    const [reservingJsonReady, setReservingJsonReady] = useState<ReservationJson | null>(null);
    const dispatch = useDispatch<AppDispatch>();
    const { data: session } = useSession();
    if (!session || !session.user.token) return null
    const urlParams = useSearchParams()
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await reservationJson;
                setReservingJsonReady(data);
            } catch (error) {
                console.error('Error fetching reservation data:', error);
            }
        };
        fetchData();
    }, []);

    const handleRemoveReservation = async (_id: string) => {
        try {
            await deleteReservation(session.user.token,  _id );

            dispatch(removeReservation(_id));

            console.log("Reservation removed successfully!");
        } catch (error) {
            console.error('Error deleting reservation:', error);
        }
    };


    return (
        <>
            {reservingJsonReady && (
                <>
                    You have {reservingJsonReady.count} reservation(s)!
                    <div className="text-black flex flex-col justify-center items-center w-[50%]">
                        {reservingJsonReady.data.map((reservationItem2: ReservationItem2) => (
                            <div className="bg-slate-200 rounded p-3" key={reservationItem2.createAt}>
                                <div className="text-xl">{reservationItem2.coworkingspace.name}</div>
                                <div className="text-md">Reserve at {reservationItem2.reservationDate}</div>
                                <div className="text-md">Province {reservationItem2.coworkingspace.province}</div>
                                <div className="text-md">Telephone number {reservationItem2.coworkingspace.telephone_number}</div>
                                <div className="text-md">Duration {reservationItem2.timereservation}</div>
                                <div className="text-md">Member since {reservationItem2.createAt.toString()}</div>
                                <button className="bg-red-500 text-white border border-transparent font-semibold py-2 px-2 m-3
                                    hover:bg-white hover:text-red-600 border-red-600 rounded-md shadow-lg shadow-blue-500/50 w-[100px]"
                                    onClick={() => handleRemoveReservation(reservationItem2._id)}>
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </>
    );
}