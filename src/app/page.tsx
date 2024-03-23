import Image from 'next/image'
import styles from './page.module.css'
import Banner from '@/components/Banner'
import Card from "@/components/Card"
import CardPanel from '@/components/CardPanel'
import PromoteCard from '@/components/PromoteCard'
import Detail from '@/components/Detail'
export default function Home() {
  return (
    <main className='justify-center bg-[#FFFFED]'>
      <Banner/>
      
      <Detail/>
      
    </main>
  )
}
