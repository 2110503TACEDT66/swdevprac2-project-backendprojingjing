'use client'
import React from 'react'

export default function InteractiveCard({children,contentname}:{children:React.ReactNode,contentname:string}){
    function onCarSelected(){
        alert("You select " + contentname)
    }
    function onCardMouseAction(event: React.SyntheticEvent){
        if(event.type=='mouseover'){
            event.currentTarget.classList.remove('shadow-lg')
            event.currentTarget.classList.remove('rounded-lg')
            event.currentTarget.classList.remove('bg-white')
            event.currentTarget.classList.add('shadow-2xl')
            event.currentTarget.classList.add('rounded-lg')
            event.currentTarget.classList.add('bg-neutral-200')
        }
        else{
            event.currentTarget.classList.remove('shadow-2xl')
            event.currentTarget.classList.remove('rounded-lg')
            event.currentTarget.classList.remove('bg-neutral-200')
            event.currentTarget.classList.add('shadow-lg')
            event.currentTarget.classList.add('rounded-lg')
            event.currentTarget.classList.add('bg-white')
        }
    }
    return(
        <div className='m-4 w-64 h-80 rounded-lg shadow-lg bg-white' 
        onClick={()=>onCarSelected()} 
        onMouseOver={(e)=>onCardMouseAction(e)}
        onMouseOut={(e)=>onCardMouseAction(e)}>
            {children}
        </div>
    )
}