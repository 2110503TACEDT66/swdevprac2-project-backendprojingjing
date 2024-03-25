'use client'
import Card from "./Card"
import { useReducer } from "react"
import Link from "next/link"
import { useRef } from "react"
import getCoworkingspaces from "@/libs/getCoworkingspaces"
import { CoworkingspaceJson } from "../../interface"
import { CoworkingspaceItem } from "../../interface"

export default async function CoworkingspaceCatalog({coworkingspacesJson}:{coworkingspacesJson:Promise<CoworkingspaceJson>}){
    var CoworkingspaceJsonReady = await coworkingspacesJson

    if(!CoworkingspaceJsonReady){
        CoworkingspaceJsonReady=await getCoworkingspaces()
    }

    return(
        <>
            
        <div className="m-[20px] flex flex-col items-center ">
        {
            CoworkingspaceJsonReady?.data.map((CoworkingspaceItem:CoworkingspaceItem)=>(
                <Link href={`/coworkingspace/${CoworkingspaceItem.id}`}>
                <Card coworkingspaceName={CoworkingspaceItem.name} imgSrc={CoworkingspaceItem.picture}
                star={CoworkingspaceItem.star}/>
                
                </Link>
            ))
        }
      </div>
        </>
    )
}

