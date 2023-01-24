import Head from 'next/head';
import Image from 'next/image'
import styles from '../../styles/Projects.module.css';

export default function About() {

    return (
        <div>
            <Head>
                <title>Projects | Dreesen</title>
                <meta name="description" content="Michael's projects" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles['about-section-two']}>
               
            </main>
        </div>
    );
}