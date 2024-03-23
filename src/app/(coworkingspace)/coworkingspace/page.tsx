import Image from "next/image";
import getCoworkingspaces from "@/libs/getCoworkingspaces";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
import CoworkingspaceCatalog from "@/components/CoworkingspaceCatalog";

export default function Coworkingspace(){

    const coworkingspaces= getCoworkingspaces()

    return(
        <main className="text-center p-5 ">
            <h1 className="text-3xl font-medium font-semibold">Select Your Co-Working Space</h1>
            <div className="flex flex-col">
                <Suspense fallback={<p>Loading... <LinearProgress/></p>}>
                    <CoworkingspaceCatalog coworkingspacesJson={coworkingspaces}/>
                </Suspense>
            </div>
            
        </main>
    )
    
}
