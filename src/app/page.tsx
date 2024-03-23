import Image from 'next/image'
import styles from './page.module.css'
import Banner from '@/components/Banner'
import Card from "@/components/Card"
import PromoteCard from '@/components/PromoteCard'
import Detail from '@/components/Detail'

export default function Home() {
  return (
    <main>
      <Banner/>
      <Detail/>
    </main>
  )
}
