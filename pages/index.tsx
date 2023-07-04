import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../src/components/header/Header'

const Home: NextPage = () => {
  return (
    <div className='w-full'>
      <Header/>
    </div>
  )
}

export default Home
