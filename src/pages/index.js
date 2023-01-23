import Head from 'next/head'
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import Particles from '../components/Particles';

import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';

import profilePic from '../../public/images/meImage.webp';

const inter = Inter({ subsets: ['latin'] })
// className={inter.className}

export default function Home() {

  const WelcomeSection = () => {
    return (
      <div className={styles['welcome-section']}>
        <div>
          <span>Hello there! I'm <span className={styles['name']}>MICHAEL</span></span>
          <br />
          <span>I'm a <span className={styles['name']}>FULLSTACK DEVELOPER</span></span>
        </div>
        <div className={styles['Typewriter']}>
          <span className={styles['name']}>CODING SKILLS</span>
          <Typewriter
            className={styles['Typewriter']}
            onInit={(write) => {
              write
                .typeString("React.js").pauseFor(3000).deleteAll()
                .typeString("Vue.js").pauseFor(3000).deleteAll()
                .typeString("Next.js").pauseFor(3000).deleteAll()
                .typeString("Handlebars").pauseFor(3000).deleteAll()
                .typeString("CSS").pauseFor(3000).deleteAll()
                .typeString("SCSS").pauseFor(3000).deleteAll()
                .typeString("Bootstrap").pauseFor(3000).deleteAll()
                .typeString("MaterialUI").pauseFor(3000).deleteAll()
                .typeString("Node").pauseFor(3000).deleteAll()
                .typeString("Javascript").pauseFor(3000).deleteAll()
                .typeString("Express").pauseFor(3000).deleteAll()
                .typeString("GraphQL").pauseFor(3000).deleteAll()
                .typeString("Sequelize").pauseFor(3000).deleteAll()
                .typeString("Mongoose").pauseFor(3000).deleteAll()
                .typeString("JWT").pauseFor(3000).deleteAll()
                .typeString("Session").pauseFor(3000).deleteAll()
                .typeString("MySql").pauseFor(3000).deleteAll()
                .typeString("Postgres").pauseFor(3000).deleteAll()
                .typeString("MongoDB").pauseFor(3000).deleteAll()
                .typeString("Check out some projects!").pauseFor(3000).start()
            }}
          />
        </div>
      </div>
    )
  }

  const aboutImage = (
    <Image
    className={styles['me-img']}
      src={profilePic}
      alt="Picture of Michael"
      width={'fit-content'}
      height={220}
      object-fit={"cover"}
    // blurDataURL="data:..." automatically provided
    // placeholder="blur" // Optional blur-up while loading
    />
  );

  return (
    <>
      <Head>
        <title>Dreesen Website</title>
        <meta name="description" content="Website about Dreesen" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles['homepage']} id="particles-js">
          <Particles></Particles>
          <div className={styles['homepage-section-container']}>
            <section className={styles['sectionOne']}>
              <div>
                <WelcomeSection />
                <div className={styles['center']}>
                  <span>Scroll <span>DOWN</span> to see more</span>
                </div>
              </div>

            </section>
            <section className={styles['sectionTwo']}>
              <h1 className={styles['about-header']}>About</h1>
              {aboutImage}
            </section>
            <div className={styles['about-p ']} data-lax-opacity="0 1, 900 0">
              Michael Dreesen started off in being a Quality Assurance analyst for web and backend projects and worked in QA for 4 years. He then graduated from Berkeley coding bootcamp earning his Full Stack Developer certification
              <br></br>
              <br /> Michael loves learning about technology and drives toward understanding of various technologies both at work and in his personal life. Michael works with various technical stacks including javascript, react, pSQL, Swagger, MAC
              OSX and Windows OS, as well as AWS products.
              <br />
              <br />When he’s not coding or working on breaking things, he enjoys hanging out with his family, utilizing the latest gaming products,
              or watching his football team win on Sundays (Go Bears!).
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
