import React from 'react';
import Typewriter from 'typewriter-effect';

const Contact = () => {

    const icon = {
        gitHub: "https://github.com/mdreesen",
        linkedIn: "https://www.linkedin.com/in/mdreesen/",
        email: "mailto: mdreesen90@gmail.com"
    }

    return (
        <div className="homepage">
            <div className="homepage-section-container">
                <section className="header">
                    <h1>Contact</h1>
                </section>
                <section className="contact-text">
                    <p>Pricing depends on the project.</p>
                </section>
                <section className="icon-section">
                    <div className="icon-container">
                        <div className="icon">
                            <Typewriter
                                onInit={(write) => {
                                    write
                                        .typeString("Github").pauseFor(3000).start()
                                }}
                            />
                            <a href={icon.gitHub}><i className="fab fa-github fa-4x" /></a>
                        </div>

                        <div className="icon">
                            <Typewriter
                                onInit={(write) => {
                                    write
                                        .typeString("LinkedIn").pauseFor(3000).start()
                                }}
                            />
                            <a href={icon.linkedIn}><i className="fab fa-linkedin-in fa-4x" /></a>
                        </div>

                        <div className="icon">
                            <Typewriter
                                onInit={(write) => {
                                    write
                                        .typeString("Email").pauseFor(3000).start()
                                }}
                            />
                            <a href={icon.email}><i className="fas fa-envelope-open fa-4x" /></a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};


export default Contact;