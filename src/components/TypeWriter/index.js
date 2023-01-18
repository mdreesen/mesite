import Typewriter from 'typewriter-effect';

export default function TypeWriter() {
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
}