import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home({list}) {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Filmes em destaque
        </h1>

        <Link href='/busca'>Ir para busca</Link>

        <ul>
          {list.map(item => (
            <li>
              <a href={`/movie/${item.id}`}>
                <img src={`http://image.tmdb.org/t/p/original${item.poster_path}`} width='150' /><br />
                {item.title}
              </a>
            </li>
          ))}
        </ul>


        
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/trending')
  const json = await res.json();
  return {
    props: {
      list: json.list
    }
  }
}
