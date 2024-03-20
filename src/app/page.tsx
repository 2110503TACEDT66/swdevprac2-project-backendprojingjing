import Image from 'next/image'
import styles from './page.module.css'
import Banner from '@/components/Banner'
import Card from "@/components/Card"


export default function Home() {
  return (
    <main>
      <Banner/>
      <div style={{margin:"20px",display:"flex",flexDirection:"row",
      flexWrap:"wrap",justifyContent:"space-around",alignContent:"space-around"}}>
        <Card coworkingspaceName='Co-working space 1' imgSrc="/img/coworkingspace1.jpg"/>
        <Card coworkingspaceName='Co-working space 2' imgSrc="/img/coworkingspace2.jpg"/>
        <Card coworkingspaceName='Co-working space 3' imgSrc="/img/coworkingspace3.jpg"/>
      </div>
    </main>
  )
}
