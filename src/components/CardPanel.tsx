'use client'
import Card from "./Card"
import { useReducer } from "react";

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

    return(
        <div>
            <div style={{margin:"20px",display:"flex",flexDirection:"row",
            flexWrap:"wrap",justifyContent:"space-around",alignContent:"space-around"}}>
                <Card coworkingspaceName='Nexus CoLab' imgSrc="/img/coworkingspace1.jpg" onRating={(coworkingspace:string, newRating:number)=>dispatchRating({type:'add',coworkingspaceName:coworkingspace,rating:newRating})}/>
                <Card coworkingspaceName='Hive Workspace' imgSrc="/img/coworkingspace2.jpg" onRating={(coworkingspace:string, newRating:number)=>dispatchRating({type:'add',coworkingspaceName:coworkingspace,rating:newRating})}/>
                <Card coworkingspaceName='Innovate Hub' imgSrc="/img/coworkingspace3.jpg" onRating={(coworkingspace:string, newRating:number)=>dispatchRating({type:'add',coworkingspaceName:coworkingspace,rating:newRating})}/>
                <Card coworkingspaceName='FlexiSpace' imgSrc="/img/coworkingspace4.jpg" onRating={(coworkingspace:string, newRating:number)=>dispatchRating({type:'add',coworkingspaceName:coworkingspace,rating:newRating})}/>
                <Card coworkingspaceName='CollaboraZone' imgSrc="/img/coworkingspace5.jpg" onRating={(coworkingspace:string, newRating:number)=>dispatchRating({type:'add',coworkingspaceName:coworkingspace,rating:newRating})}/>
            </div>

            {Array.from(ratingList).map(([coworkingspace, rating]) => <div key={coworkingspace} data-testid={coworkingspace}
            onClick={()=>dispatchRating({type:'remove', coworkingspaceName:coworkingspace, rating})} className="mx-10 my-3 text-lg font-sans"> 
                {coworkingspace} Rating: {rating}
            </div> )}
        </div>
    )
}