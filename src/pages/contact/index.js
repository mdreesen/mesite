import Head from 'next/head';
import Typewriter from 'typewriter-effect';
import styles from '../../styles/Contact.module.css';

import Header from '../../../components/Header';

const Contact = () => {

    const icon = {
        gitHub: "https://github.com/mdreesen",
        linkedIn: "https://www.linkedin.com/in/mdreesen/",
        email: "mailto: mdreesen90@gmail.com"
    }

    return (
        <div>
            <Head>
                <title>Contact | Dreesen</title>
                <meta name="description" content="Michael's Contact Info" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles['contact']}>
                <div className={styles['contact-section-container']}>
                    <Header className={styles['header']} title="Contact" />
                    <div className={styles['contact-text']}>
                        <p>Pricing depends on the project.</p>
                        <br />
                        <p>Lets see what is the right fit for you!</p>
                    </div>
                    <div className={styles['icon-section']}>
                        <div className={styles['icon-container']}>
                            <a href={icon.gitHub} className={styles['icon']}>
                                <Typewriter
                                    onInit={(write) => {
                                        write
                                            .typeString("Github").pauseFor(3000).start()
                                    }}
                                />
                            </a>

                            <a href={icon.linkedIn} className={styles['icon']}>
                                <Typewriter
                                    onInit={(write) => {
                                        write
                                            .typeString("LinkedIn").pauseFor(3000).start()
                                    }}
                                />
                            </a>

                            <a href={icon.email} className={styles['icon']}>
                                <Typewriter
                                    onInit={(write) => {
                                        write
                                            .typeString("Email").pauseFor(3000).start()
                                    }}
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </div>

    );
};


export default Contact;