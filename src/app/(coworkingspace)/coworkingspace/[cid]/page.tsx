import Image from "next/image";

export default function Coworkingspace({params}:{params:{cid:string}}) {
    
    const mockCoworkingspaceRepo = new Map()
    mockCoworkingspaceRepo.set("001",{name: 'Nexus CoLab',image: '/img/coworkingspace1.jpg'})
    mockCoworkingspaceRepo.set("002",{name: 'Hive Workspace',image: '/img/coworkingspace2.jpg'})
    mockCoworkingspaceRepo.set("003",{name: 'Innovate Hub',image: '/img/coworkingspace3.jpg'})
    mockCoworkingspaceRepo.set("004",{name: 'FlexiSpace',image: '/img/coworkingspace4.jpg'})
    mockCoworkingspaceRepo.set("005",{name: 'CollaboraZone',image: '/img/coworkingspace5.jpg'})

    return (
        <main className="text-center p-5">
            <div className="flex flex-row my-5">
                <Image src={(mockCoworkingspaceRepo.get(params.cid)).image}
                alt="Coworkingspace Image"
                width={0} height={0} sizes="100vw"
                className="rounded-lg w-[30%] border border-black"
                />
                <div className="text-md mx-5">{(mockCoworkingspaceRepo.get(params.cid)).name}</div>
            </div>
        </main>
    )
}