import React from 'react';
import Image from 'next/image';

export default function Reservation() {
    return (
        <main className="relative w-full flex flex-col items-center space-y-4 h-screen">
            <div className="absolute inset-0 z-0">
                <Image src={'/img/cover1.jpg'} alt='coworkingspace' layout="fill" objectFit="cover" priority />
            </div>

            <div className="relative z-10 bg-gray-200 bg-opacity-50 p-4 rounded-lg w-full h-full flex flex-col justify-center items-center">
                <div className='bg-gray-200'>
                    <div className="text-center bg-gray-200 p-5 rounded-3xl drop-shadow-xl w-full text-black text-4xl">
                        <p>Contact Us</p>
                    </div>
                    <br/>
                    
                    <div className="w-full overflow-x-auto text-black">
                        <table className="table-auto w-full text-center bg-white">
                            <thead>
                                <tr>
                                    <th className="border px-4 py-2 text-3xl">EMAIL</th>
                                    <th className="border px-4 py-2 text-3xl">Phone</th>
                                    <th className="border px-4 py-2 text-3xl">Facebook</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='text-center'>
                                    <td className="border px-4 py-2">
                                        <div className="flex justify-center">
                                            <Image src={'/img/email.png'} alt='email' width={100} height={100}/>
                                        </div>
                                    </td>
                                    <td className="border px-4 py-2">
                                        <div className="flex justify-center">
                                            <Image src={'/img/phone.png'} alt='phone' width={100} height={100}/>
                                        </div>
                                    </td>
                                    <td className="border px-4 py-2">
                                        <div className="flex justify-center">
                                            <Image src={'/img/facebook.png'} alt='facebook' width={100} height={100}/>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">user@gmail.com</td>
                                    <td className="border px-4 py-2">02-459-2424</td>
                                    <td className="border px-4 py-2">Co-workingspace</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    );
}
