'use client'

export default function ReviewCard({children,contentname}:{children:React.ReactNode,contentname:string}){
    
    function onCardMouseAction(event: React.SyntheticEvent) {
        if (event.type=='mouseover'){
            event.currentTarget.classList.remove('bg-white')
            event.currentTarget.classList.remove('shadow-lg')
            event.currentTarget.classList.add('bg-gray-200')
            event.currentTarget.classList.add('shadow-xl')
            event.currentTarget.classList.add('shadow-gray-500/30')
        } else {
            event.currentTarget.classList.remove('bg-gray-200')
            event.currentTarget.classList.remove('shadow-xl')
            event.currentTarget.classList.remove('shadow-gray-500/30')
            event.currentTarget.classList.add('bg-white')
            event.currentTarget.classList.add('shadow-lg')
        }
    }

    return (
        <div className="w-[300px] h-[300px] rounded-xl shadow-lg bg-white border-2 flex flex-col m-5 items-center"
            onMouseOver={(e)=>onCardMouseAction(e)}
            onMouseOut={(e)=>onCardMouseAction(e)}>
            {children}
        </div>
    )
}