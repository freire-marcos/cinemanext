import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Contato() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contato</title>

      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Fale conosco
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        
      </main>


    </div>
  )
}
