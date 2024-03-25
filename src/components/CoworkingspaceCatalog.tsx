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
                <Link href={`/coworkingspace/${CoworkingspaceItem.id}`} className="w-[100%] sm:w-[50%] md:w=[30%] lg:w-[25%] p-2 sm:p-4 md:p-4 lg:p-8 ">
                <Card coworkingspaceName={CoworkingspaceItem.name} imgSrc={CoworkingspaceItem.picture}
                star={CoworkingspaceItem.star}/>
                
                </Link>
            ))
        }
      </div>
        </>
    )
}

