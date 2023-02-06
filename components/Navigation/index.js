import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styles from '../../src/styles/Navigation.module.css';

const Navigation = () => {

    const NavLink = [
        {
            "name": "Home",
            "link": "/"
        },
        {
            "name": "Projects",
            "link": "/projects"
        },
        {
            "name": "Contact",
            "link": "/contact"
        }
    ];

    return (
        <Navbar className={styles['navbar']} collapseOnSelect expand="lg" variant="dark" fixed='top' aria-label="responsive navigation">
            <Container>
                {/* <Navbar.Brand href="/"><img className='nav-logo' alt="" src={logo}></img></Navbar.Brand> */}
                <Navbar.Toggle className={styles['navbar-toggler']} aria-label="responsive nav toggler" aria-controls="responsive-navbar-nav" />

                <Navbar.Offcanvas
                    className={styles['navbar-toggler']}
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                    aria-label="Toggle collapsible navigation"
                >
                    <Offcanvas.Header closeButton>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            {
                                NavLink.map(nav => <Nav.Link href={nav?.link} key={nav?.name} aria-label={`Navigation Link ${nav?.name}`}>{nav?.name}</Nav.Link>)
                            }
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
};

export default Navigation;