'use client'
import Card from "./Card"
import { useReducer } from "react";
import Link from "next/link";

export default function CardPanel() {

    const showRatingReducer = (ratingList: Map<string, number>, action: { type: string; coworkingspaceName:string; rating: number })=>{
        switch(action.type) {
            case 'add': {
                ratingList.set(action.coworkingspaceName,action.rating)
                return new Map(ratingList)
            }
            case 'remove': {
                ratingList.delete(action.coworkingspaceName);
                return new Map(ratingList)
            }
            default: return ratingList
        }
    }
    
    //สร้าง Map พร้อมค่าเริ่มต้น
    const [ratingList,dispatchRating] = useReducer(showRatingReducer,new Map([['Nexus CoLab', 5],['Hive Workspace', 5],['Innovate Hub', 5],['FlexiSpace', 5],['CollaboraZone', 5]]))


    //Mock data na ja
    const mockCoworkingspaceRepo = [
        {cid: '001', name:'Nexus CoLab', image: "/img/coworkingspace1.jpg"},
        {cid: '002', name:'Hive Workspace', image: "/img/coworkingspace2.jpg"},
        {cid: '003', name:'Innovate Hub', image: "/img/coworkingspace3.jpg"},
        {cid: '004', name:'FlexiSpace', image: "/img/coworkingspace4.jpg"},
        {cid: '005', name:'CollaboraZone', image: "/img/coworkingspace5.jpg"},

    ]

    return(
        <div >
            <div style={{margin:"20px",display:"flex"
            ,flexWrap:"wrap",justifyContent:"space-around",alignContent:"space-around"}}>
            {
                mockCoworkingspaceRepo.map((coworkingspaceItem)=>(
                    <Link href={`coworkingspace/${coworkingspaceItem.cid}`}>
                    <Card coworkingspaceName={coworkingspaceItem.name} imgSrc={coworkingspaceItem.image} onRating={(coworkingspace:string, newRating:number)=>dispatchRating({type:'add',coworkingspaceName:coworkingspace,rating:newRating})}/>
                    </Link>
                ))
                    
            } 
            </div>

            {Array.from(ratingList).map(([coworkingspace, rating]) => <div key={coworkingspace} data-testid={coworkingspace}
            onClick={()=>dispatchRating({type:'remove', coworkingspaceName:coworkingspace, rating})} className="mx-10 my-3 text-lg font-sans"> 
                {coworkingspace} Rating: {rating}
            </div> )}
        </div>
    )
}