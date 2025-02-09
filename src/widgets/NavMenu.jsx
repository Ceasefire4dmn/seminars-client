import Container from 'react-bootstrap/Container'; 
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; 
import './widgets.css';
const NavMenu = () => {
    return (
        <Navbar className="container-3">
            <Container fluid className='NavPanel'>
                <Navbar.Brand>Seminars Manager App</Navbar.Brand>
                    <Nav
                        className="me-auto my-2 my-lg-2"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link>&bull;</Nav.Link>
                        <Nav.Link href="/seminars">Seminars List</Nav.Link>
                        <Nav.Link>&bull;</Nav.Link>
                        <Nav.Link href="/about">
                            About
                        </Nav.Link>
                    </Nav>
            </Container>
        </Navbar>
    );
}

export default NavMenu;