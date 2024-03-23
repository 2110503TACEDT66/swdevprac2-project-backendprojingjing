import ReservationMenu from "@/components/ReservationMenu";
import styles from './reservaions.module.css';

export default function ReservationLayout ({children}:{children:React.ReactNode}){
    return(
        <div className={styles.sectionlayout}>
            {children}
        </div>
    );
}