import { Container, Row, Col, Image, Nav, NavLink } from "react-bootstrap";
import logo from "../Images/logo.png"; 

function Footer() {
    return (
        <footer>
            <Container fluid>
                <Row className="bg-primary text-white p-3">

                    <Col md={4} className="d-flex flex-column align-items-center">
                        <Image 
                            src={logo}
                            alt="company logo"
                            rounded
                            width={100}
                            height={80}
                        />
                        <h4 className="mt-3">Censo Escolar</h4>
                        <p>Instituições de Ensino</p>
                    </Col>

                    <Col md={4} className="d-flex flex-column align-items-center">
                        <h5>Acesso à Informação</h5>
                        <Nav className="flex-column text-center">
                            <NavLink href="#" className="text-white">Home</NavLink>
                            <NavLink href="#" className="text-white">Sobre</NavLink>
                            <NavLink href="#" className="text-white">Dados de Alunos</NavLink>
                            <NavLink href="#" className="text-white">Consultas</NavLink>
                        </Nav>
                    </Col>

                    <Col md={4} className="d-flex flex-column align-items-center">
                        <h5>Contato</h5>
                        <p>email@fakeemail.com</p>
                        <p>Telefone: +1(800)867-5309</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
