import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom"; 

function Header() {
    return (
        <header>
            <Navbar bg="primary" data-bs-theme="dark" style={{ fontSize: "1.2em" }}>
                <Container>
                    <Navbar.Brand as={Link} to="/">Censo Escolar</Navbar.Brand>
                    <Nav>
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/instituicoes">Instituições de Ensino</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;