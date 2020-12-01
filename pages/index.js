import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Link from 'next/link'

import Toolbar from '../components/Toolbar/Toolbar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>LocalCart</title>
        <header>
          <Toolbar/>
        </header>
      </Head>
    </div>
  )
}
