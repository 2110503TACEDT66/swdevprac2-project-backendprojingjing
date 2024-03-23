'use client'
import Card from "./Card"
import { useReducer } from "react"
import Link from "next/link"
import { useRef } from "react"
import getCoworkingspaces from "@/libs/getCoworkingspaces"

export default async function CoworkingspaceCatalog({coworkingspacesJson}:{coworkingspacesJson:Promise<CoworkingspaceJson>}){
    var CoworkingspaceJsonReady = await coworkingspacesJson
    if(!CoworkingspaceJsonReady){
        CoworkingspaceJsonReady=await getCoworkingspaces()
    }

    return(
        <>
            <div style={{margin:"20px",display:"flex",
            flexWrap:"wrap",justifyContent:"space-around",alignContent:"space-around"}}>
        {
            CoworkingspaceJsonReady?.data.map((CoworkingspaceItem:CoworkingspaceItem)=>(
                <Link href={`/coworkingspace/${CoworkingspaceItem.id}`}>
                <Card coworkingspaceName={CoworkingspaceItem.name} imgSrc={CoworkingspaceItem.picture}
                />
                </Link>
            ))
        }
      
      </div>
        </>
    )
}

