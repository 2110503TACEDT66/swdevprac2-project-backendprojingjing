import styles from './topmenu.module.css'
import Link from 'next/link';

export default function TopMenuItem({title,pageRef}:{title:string,pageRef:string}){
    return(
        <Link href={pageRef} className='w-[120px] text-center mt-auto mb-auto not-italic 
                text-black p-3 font-semibold rounded hover:bg-gray-50 drop-shadow-md
                hover:text-white hover:text-black hover:drop-shadow-xl'>
            {title}
        </Link>
    );
}