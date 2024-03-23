import Image from "next/image";
export default function About(){

    return(
        <main className="text-center p-5 text-black">
          <div className="text-black text-2xl">About Us</div>
          <div className="w-[80%] flex flex-col space-y-4 bg-white text-black-600 border border-gray-600
            font-semibold m-20 p-10 flex justify-center items-center shadow-xl">
            Welcome to our coworking space reservation platform! We provide a seamless experience for individuals and businesses to book coworking spaces.
            Our mission is to create flexible work environments that foster productivity and collaboration.
        </div>
        </main>
    )
    
}
