'use client'
import VideoPlayer from "./VideoPlayer"
import { useState } from "react"


export default function PromoteCard() {
    const [playing, setPlaying] = useState(true)
    
    return (
        <div className="w-[80%] shadow-lg mx-[10%] my-10 p-2 rounded-lg bg-gray-200
        flex flex-row">
            <VideoPlayer vdoSrc="/vdo/promoteClip.mp4" isPlaying={playing}></VideoPlayer>
            <div className="m-5 text-2xl text-black">
                Enjoy your Co-working Space :
                <br />
                <br />
                <button className="bottom-0 block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm"
                    onClick={()=>{setPlaying(!playing)}}>
                    {playing?'pause':'play'}
                </button>
            </div>
        </div>
    )

}