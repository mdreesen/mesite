import React from 'react';

const Home = () => {

    // const words = ['React', 'Vue', 'Node', 'Javascript', 'Express', 'GraphQL', 'Sequelize', 'Mongoose', 'JWT', "Session", 'MySql', 'Postgres', 'MongoDB']
    // let count = 0;
    // let index = 0;
    // let currentText = '';
    // let letter = '';

    // // Self evoked function
    // function typeEffect() {
    //     if (count === words.length) {
    //         count = 0;
    //     }
    //     currentText = words[count];
    //     letter = currentText.slice(0, ++index);
        
    //     document.querySelector(".typing").textContent = letter;
    //     if (letter.length === currentText.length) {
    //         count++;
    //         index = 0;
    //     }
    //     setTimeout(typeEffect, 400);
    // };
    return (
        <div>
            <div className="homepage-section-container">
                <section className="sectionOne">
                    <div className="sectionOne-header-container">
                        <h1>Welcome</h1>
                        <h1 className="typing"></h1>
                    </div>
                </section>

                <section className="sectionTwo">Section Two</section>
                <section className="sectionThree">Section Three</section>
            </div>
        </div>
    );
};


export default Home;