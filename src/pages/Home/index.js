import React from 'react';
import Typewriter from 'typewriter-effect';
import Parallax from 'react-rellax';

import mePhoto from '../../components/assets/meImage.JPG';


const Home = () => {

    return (
        <div>
            <div className="homepage-section-container">
                <section className="sectionOne">
                    <div className="sectionOne-header-container">
                    <Parallax speed={ -5 }><h1>Welcome</h1>
                        <Typewriter
                            onInit={(write) => {
                                write
                                    .typeString("React").pauseFor(3000).deleteAll()
                                    .typeString("Vue").pauseFor(3000).deleteAll()
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
                                    .typeString("Mongodb").pauseFor(3000).deleteAll()
                                    .typeString("Take a look at some projects!").pauseFor(3000).start()
                            }}
                         />
                         </Parallax>
                    </div>
                </section>
                <section className="sectionTwo">
                <h1>About</h1>
                    <img src={mePhoto} alt="Michael's Face Image" className="me-img" />
                </section>
                <div className="about-text">
                    <div className="about-p">
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