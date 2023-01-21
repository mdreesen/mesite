import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styles from '../../styles/Navigation.module.css';

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
        <Navbar className={styles['navbar']} collapseOnSelect expand="lg" variant="dark" fixed='top'>
            <Container>
                {/* <Navbar.Brand href="/"><img className='nav-logo' alt="" src={logo}></img></Navbar.Brand> */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="desktop_links">
                        {
                            NavLink.map(nav => <Nav.Link href={nav?.link} key={nav?.name}>{nav?.name}</Nav.Link>)
                        }
                    </Nav>
                </Navbar.Collapse>

                {/* Mobile slide */}
                <Navbar.Offcanvas
                    className="navbar-toggler"
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
                                NavLink.map(nav => <Nav.Link href={nav?.link} key={nav?.name}>{nav?.name}</Nav.Link>)
                            }
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
};

export default Navigation;