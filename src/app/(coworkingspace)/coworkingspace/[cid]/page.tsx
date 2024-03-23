import Image from "next/image";
import getCoworkingspace from "@/libs/getCoworkingspace";

export default async function Coworkingspace({params}:{params:{cid:string}}) {
    
    const coworkingspaceDetail = await getCoworkingspace(params.cid)

    // const mockCoworkingspaceRepo = new Map()
    // mockCoworkingspaceRepo.set("001",{name: 'Nexus CoLab',image: '/img/coworkingspace1.jpg'})
    // mockCoworkingspaceRepo.set("002",{name: 'Hive Workspace',image: '/img/coworkingspace2.jpg'})
    // mockCoworkingspaceRepo.set("003",{name: 'Innovate Hub',image: '/img/coworkingspace3.jpg'})
    // mockCoworkingspaceRepo.set("004",{name: 'FlexiSpace',image: '/img/coworkingspace4.jpg'})
    // mockCoworkingspaceRepo.set("005",{name: 'CollaboraZone',image: '/img/coworkingspace5.jpg'})

    return(
        <main className="text-center p-5 text-black">
            <h1 className="text-lg font-medium">{coworkingspaceDetail.data.model}</h1>
            <div className="flex flex-row my-5">
                <Image src={coworkingspaceDetail.data.picture} alt='Coworkingspace Image'
                width={0} height={0} sizes="100vw"
                className="rounded-lg w-[30%] h-[70%]"/>
                <div>
                <div className="text-md mx-5 text-left">{coworkingspaceDetail.data.name}</div>
                <div className="text-md mx-5 text-left">Address: {coworkingspaceDetail.data.address}</div>
                <div className="text-md mx-5 text-left">telephone_number: {coworkingspaceDetail.data.telephone_number}</div>

                </div>
            </div>
        </main>
    )
}