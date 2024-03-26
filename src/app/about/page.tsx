import React from 'react';
import Image from 'next/image';

export default function aboutUs() {
    return (
        <main className="relative w-full flex flex-col items-center space-y-4 h-screen">
            <div className="absolute inset-0 z-0">
                <Image src={'/img/cover1.jpg'} alt='coworkingspace' layout="fill" objectFit="cover" priority />
            </div>

            <div className="relative z-10 bg-gray-200 bg-opacity-50 p-4 rounded-lg w-full h-full flex flex-col justify-center items-center">
                <div className='bg-gray-200'>
                    <div className="text-center bg-gray-200 p-5 rounded-3xl drop-shadow-xl w-full text-black text-4xl">
                        <p>About Us</p>
                    </div>
                    <br/>
                    
                    <div className="w-full overflow-x-auto text-black p-3">
                        Welcome to our coworking space reservation platform! We provide a seamless experience for individuals and businesses to book coworking spaces. Our mission is to create flexible work environments that foster productivity and collaboration.
                    </div>
                </div>
            </div>
        </main>
    );
}
