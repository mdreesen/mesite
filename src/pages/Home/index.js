import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import Parallax from 'react-rellax';
import lax from 'lax.js'
import Particles from '../../components/Particles';
import './home.css';

import mePhoto from '../../components/assets/meImage.webp';


const Home = () => {

    const [hero, setHero] = useState(false);

    const background = () => {
        return window.scrollY >= 200 ? setHero(true) : setHero(false)
    }

    window.addEventListener('scroll', background)

    window.onload = function () {
        lax.init()

        // Add a driver that we use to control our animations
        lax.addDriver('scrollY', function () {
            return window.scrollY
        })

        // Add animation bindings to elements
        lax.addElements('.selector', {
            scrollY: {
                translateX: [
                    ["elInY", "elCenterY", "elOutY"],
                    [0, 'screenWidth/2', 'screenWidth'],
                ]
            }
        })
    };

    const WelcomeSection = () => {
        return (
            <div className='welcome-section'>
                <div>
                    Hello there! I'm <span class="name">Michael</span>
                </div>
                <div>
                    <span>Some of the things I know:</span>
                    <Typewriter
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


    return (
        <div className="homepage" id="particles-js">
            <Particles></Particles>
            <div className="homepage-section-container">
                <section className="sectionOne">
                    <div className={hero ? 'disappear' : "sectionOne-header-container"}>
                        <Parallax speed={-3}><h1>Welcome</h1>
                           <WelcomeSection />
                        </Parallax>
                    </div>
                </section>
                <section className="sectionTwo">
                    <h1 className='about-header'>About</h1>
                    <img src={mePhoto} alt="Michael's Face" className="me-img" />
                </section>
                <div className="about-text">
                    <div className="about-p lax" data-lax-opacity="0 1, 900 0">
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
        </div>
    );
};


export default Home;