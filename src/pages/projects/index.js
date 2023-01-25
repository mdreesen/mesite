import Head from 'next/head';
import styles from '../../styles/Projects.module.css';

// Import Components
import Header from '../../components/Header';
import Card from '../../components/Card';

export default function About() {
    return (
        <div>
            <Head>
                <title>Projects | Dreesen</title>
                <meta name="description" content="Michael's projects" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles['Background']}>
            <Header title="Projects"/>
               <Card />
            </main>
        </div>
    );
}