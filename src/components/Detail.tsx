import Image from "next/image";
import ReviewCard from "./ReviewCard";
import Rcard from "./Rcard";
import PromoteCard from "./PromoteCard";

export default function Detail() {
    return(
        <div>
            <div className="bg-gray-200 rounded-xl border-2 m-10 py-10 flex flex-row justify-center">
                <div className='w-[30%] mx-0'>
                <Image src={'/img/promote.jpg'} className='rounded-xl w-[100%] ' alt='logo'
                width={0} height={0} sizes='200vw' />
                </div>
                <div className="w-[50%] mx-10">
                    <div className="font-semibold text-xl">
                        Join Our Co-Working Space
                    </div>       
                    <br />
                    <p>
                        Elevate your productivity in our vibrant co-working space. With flexible workspaces, high-speed internet, and modern amenities, we have everything you need for success. Join our supportive community and network with like-minded professionals. Experience a new level of creativity and growth today!
                    </p>
                </div>
            </div>

            <div className="flex flex-row justify-between mx-10">
                <div className="bg-gray-200 rounded-xl border-2 w-5/12 text-lg flex flex-row" >           
                    <p className="m-10">
                    Welcome to our vibrant coworking space designed to inspire productivity and collaboration. Situated in the heart of the city, our modern facility offers a dynamic environment where freelancers, entrepreneurs, and remote workers can thrive. With flexible workspaces, state-of-the-art amenities, and a diverse community of professionals, we provide the perfect setting for networking, brainstorming, and turning ideas into reality. Whether you need a private office for focused work or prefer the energy of an open-plan area, our space caters to your needs, fostering creativity and innovation every step of the way. Join us and experience a new way of working that combines comfort, convenience, and creativity in one dynamic location.
                    </p>
                </div >
                <Image src={'/img/cover1.jpg'} className="w-full" alt="test" width={0} height={0}/>
            </div>
            

            <PromoteCard/>
            <div className="bg-white rounded-xl border-2 m-10 flex flex-col items-center justify-center ">
                <br />
                <div className="text-2xl font-semibold">
                    Our Feedback
                </div>
                <div className="flex flex-row">
                    <Rcard imgSrc="/img/men.png" name="Mr.Smith" rating={5} 
                    description="This coworking space exceeded my expectations! Modern design, fast internet, great amenities, and a welcoming community make it perfect for productivity. Highly recommend!"/>
                    <Rcard imgSrc="/img/woman.png" name="Mrs.Jane" rating={5} 
                    description="Exceptional ambiance, fast internet, and friendly staff make it the ultimate productivity hub! Highly recommend for professionals!"/>
                    <Rcard imgSrc="/img/men.png" name="Mr.George" rating={4} 
                    description="Great atmosphere, fast Wi-Fi, and friendly staff create a conducive environment for work and networking. Highly recommended for a productive workday!"/>
                    <Rcard imgSrc="/img/woman.png" name="Mrs.Ann" rating={4} 
                    description="Perfect blend of comfort and productivity, with top-notch amenities and friendly staff, ideal for professionals."/>
                </div>
            </div>
        </div>
        
     )
}
