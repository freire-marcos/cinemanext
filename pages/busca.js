import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useState } from 'react'

export default function Busca() {
    const [searchText, setSearchText] = useState('');

    const handleSearch = async () => {
        
    }
    return (
        <div className={styles.container}>
        <Head>
            <title>Create Next App</title>
        </Head>

        <main className={styles.main}>
            <h1 className={styles.title}>
            Busca
            </h1>

            <Link href='/'>Home</Link>

            <input type='text' value={searchText} onChange={e=>setSearchText(e.target.value)}></input>
            <button onClick={handleSearch}>Buscar</button>

        
        </main>
        </div>
    )
}

