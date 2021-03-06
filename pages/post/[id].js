import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'

export default function PostItem() {
    const router = useRouter();
    const {id} = router.query;
  return (
    <div className={styles.container}>
      <Head>
        <title>Contato</title>

      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          POST ACESSADO: {id}
        </h1>

       
      </main>


    </div>
  )
}
