import Image from "next/image";
import getCoworkingspaces from "@/libs/getCoworkingspaces";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
import CoworkingspaceCatalog from "@/components/CoworkingspaceCatalog";

export default function Coworkingspace(){

    const coworkingspaces= getCoworkingspaces()

    return(
        <main className="text-center p-5 text-black">
            <h1 className="text-x1 font-medium text-black">Select Your Coworkingspace
            <Suspense fallback={<p>Loading... <LinearProgress/></p>}>
                <CoworkingspaceCatalog coworkingspacesJson={coworkingspaces}/>
            </Suspense>
            </h1>
        </main>
    )
    
}
