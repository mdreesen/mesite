import React from 'react';
// import AOS from 'aos';
import 'aos/dist/aos.css';

// import materialUI styling
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


// import images
import Northerlights from '../assets/northerlights.png';
import SmollTalkImage from '../assets/smollTalk.png';
import EcommBackendImage from '../assets/backendEcomm.png';
import BloggerImage from '../assets/blogger.png';
import SocialNetworkImage from '../assets/socialNetworkBackend.png';
import ReadMeImage from '../assets/readmeGen.png';
import about21ioImage from '../assets/21io.jpg';
// import wrenImage from '../assets/wren.png';
import lrtImage from '../assets/lrt.png';
import wbImage from '../assets/wildbeginnings.png';

function ProjectSection({
    project: {
        name,
        description,
        about,
        techUsed
    },
    image,
    github,
    demo
}) {

    const useStyles = makeStyles({
        root: {
            maxWidth: 345,
        },
    });

    const classes = useStyles();




    return (
        <>
            <Card className={classes.root} key={name} data-aos="fade-in">
                <CardActionArea key={name}>
                    <CardMedia
                        component="img"
                        alt="Project Title"
                        height="140"
                        image={image}
                        title="Project Title"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {description}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {about}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {techUsed}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        <a href={github}>Github</a>
                    </Button>
                    <Button size="small" color="primary">
                        <a href={demo}>Demo</a>
                    </Button>
                </CardActions>
            </Card>
        </>
    )
}

function Projects() {

    const northernlights = {
        name: "Northern Lights",
        description: "Property management company's rental to see more details about the property.",
        about: "A frontend application made from React",
        techUsed: "Tech used: React, CSS, Bootstrap, react-video-js-player, react-scrollmagic, JavaScript, react-rellax, luxon, aos"
    }

    const about21io = {
        name: "21io",
        description: " A MERN stack application, 21io is an application that allows it's users to login, search for & save movies to a library then pay for a movie if they choose to stream it when online.",
        about: "This project was a group project where we utilized different technology to complete this application, this was a MERN stack application.",
        techUsed: "Tech used: Mongodb, Mongoose, React, Material-UI, CSS, JavaScript, GraphQL"
    }

    const aboutSmollTalk = {
        name: "SmollTalk",
        description: "This site is a CMS-style chat site similar to a Wordpress site, where communities can post and comment on other friends’ posts.",
        about: "This project was a group project where we utilized different technology to complete this application.",
        techUsed: "Tech used: Express.js, MySql, Handlebars.js, bootstrap, CSS, HTML, Cypress (Testing), JavaScript."
    }

    const aboutBackendEcomm = {
        name: "Ecommerce Backend",
        description: "An e-commerce backend project that deals with Products, tags, and categories. This can help a small shop organize and keep up with their data.",
        about: "Created a Express and MySql e-commerce backend project, this is a 'CRUD' project.",
        techUsed: "Tech used: Express.js, MySql, Sequelize, Node.Js, Dotenv."
    }

    const aboutBlogger = {
        name: "Blogger",
        description: "This site is for bloggers to post their blog links to, comment on posts, and be a part of the blogging community.",
        about: "This blog site utilizes Handlbars.Js as the frontend.",
        techUsed: "Tech used: Handlebars.js, Express-Handlebars, Express-Session, Express-Session-Sequelize, Bcrypt, MySql2, Sequelize, JavaScript."
    }

    const aboutSocialBackend = {
        name: "Social Network Backend",
        description: "This backend application is made for social-media apps. In this backend application we can find users, create users, add and delete friends, add and remove thoughts, and add and remove reactions.",
        about: "A backend product that any social network can utilize.",
        techUsed: "Tech used: Mongoose, MongoDB, Express.Js, Moment.Js."
    }

    const aboutReadMeGen = {
        name: "README Generator",
        description: "This readMe-gen project is to make users a readMe with easy steps to follow so that their README.md looks professional and clean.",
        About: "This README Generator asks the user questions about their project. This is used with Node.Js through the terminal.",
        techUsed: "Javascript, Inquirer, fs."
    }

    const wildBeginnings = {
        name: "Wild Beginnings",
        description: " A frontend React application, This is a portfolio site made for a Doula.",
        about: "This project was a personal project where I utilized different frontend React packages to complete this application.",
        techUsed: "Tech used: React, react-parallax, Bootstrap, CSS, JavaScript, heroku"
    }

    const lrt = {
        name: "Little Red Truck Photography",
        description: " A frontend React application, This is a portfolio site made for a Photographer.",
        about: "This project was a personal project where I utilized different frontend React packages to complete this application.",
        techUsed: "Tech used: React, react-slider, Bootstrap, CSS, JavaScript, heroku"
    }

    // const wren = {
    //     name: "Wren",
    //     description: " A Full Stack application. This site I want to help birth workers have a better place to keep track of their clients, and for Mothers to have the community they need around them.",
    //     about: "This project was a personal project where I utilized different frontend and backend technologies to complete this application.",
    //     techUsed: "Tech used: React, graphQL, Bootstrap, CSS, JavaScript, AuthTokens(JWT), Express, Apollo-server, Mongoose, Mongodb"
    // }

    const projectList = [
        // {
        //     project: wren,
        //     image: wrenImage,
        //     demo: 'http://wrenbird.herokuapp.com/',
        //     github: 'https://github.com/mdreesen/wren'
        // },
        {
            project: northernlights,
            image: Northerlights,
            demo: 'https://infallible-shaw-eead0a.netlify.app/',
            github: 'https://github.com/mdreesen/northernlights'
        },
        {
            project: about21io,
            image: about21ioImage,
            demo: 'https://movie-21io.herokuapp.com/',
            github: 'https://github.com/queen-stack/21io'
        },
        {
            project: aboutSmollTalk,
            image: SmollTalkImage,
            demo: "https://github.com/queen-stack/smollTalk",
            github: "https://limitless-shelf-64509.herokuapp.com/"
        },
        {
            project: wildBeginnings,
            image: wbImage,
            demo: 'https://www.wildbeginningsbirth.com/',
            github: 'https://github.com/mdreesen/lovelace-site'
        },
        {
            project: lrt,
            image: lrtImage,
            demo: 'https://tranquil-meadow-41399.herokuapp.com/',
            github: 'https://github.com/mdreesen/little-red-truck'
        },
        {
            project: aboutBackendEcomm,
            image: EcommBackendImage,
            demo: "https://drive.google.com/file/d/1O_dkaGfU9SqFc9S3XuKH-WkM6Nktg3yP/preview",
            github: "https://github.com/mdreesen/e-commerce"
        },
        {
            project: aboutBlogger,
            image: BloggerImage,
            demo: "https://murmuring-reaches-11111.herokuapp.com/",
            github: "https://github.com/mdreesen/blogger"
        },
        {
            project: aboutSocialBackend,
            image: SocialNetworkImage,
            demo: "https://drive.google.com/file/d/1BSpR2uUyg2ozcEFSfSj6GeIwh0Z-6C19/view",
            github: "https://github.com/mdreesen/social_network_backend"
        },
        {
            project: aboutReadMeGen,
            image: ReadMeImage,
            demo: "https://drive.google.com/file/d/1Uw3jb4EZVfyN5Xb4YTNhDpcaN0uNEzQ4/edit",
            github: "https://github.com/mdreesen/readme-gen"
        }

    ]



    return (

        <section className="project-cards">
            <div className="projectContainer">

            {
                projectList.map((info) =>
                    <Grid
                        container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justify="center"
                        style={{ minHeight: '75vh' }}
                    >
                        <Grid>
                            <ProjectSection
                                project={info.project}
                                image={info.image}
                                github={info.github}
                                demo={info.demo}
                            />
                        </Grid>
                    </Grid>
                )
            }
            </div>
        </section>
        
    );
    
}


export default Projects;