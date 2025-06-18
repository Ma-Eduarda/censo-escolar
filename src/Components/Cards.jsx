import { Card, Row, Col, Button } from "react-bootstrap";

import "../App.css";
import card1 from "../images/card1.png";
import card2 from "../images/card2.png";
import card3 from "../images/card3.png";

const Cards = () => {
    return (
        <>
            <div className="container mb-5">
                <Row xs={1} md={3} className="g-4">
                    <Col>
                        <Card style={{ textAlign: "center" }}>
                            <Card.Img variant="top" src={card1} className="card-img" />
                            <Card.Body>
                                <Card.Title style={{ fontWeight: "bold", fontSize: "1.1rem" }}>Instituições</Card.Title>
                                <Card.Text>Descubra quantas instituições públicas e privadas participam do Censo Escolar em todo o país.</Card.Text>
                                <Button variant="primary">Saiba mais</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ textAlign: "center" }}>
                            <Card.Img variant="top" src={card2} className="card-img" />
                            <Card.Body>
                                <Card.Title style={{ fontWeight: "bold", fontSize: "1.1rem" }}>Dados de Alunos</Card.Title>
                                <Card.Text>Dados sobre matrícula, idade, séries e inclusão escolar de milhões de estudantes brasileiros.</Card.Text>
                                <Button variant="primary">Saiba mais</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ textAlign: "center" }}>
                            <Card.Img variant="top" src={card3} className="card-img" />
                            <Card.Body>
                                <Card.Title style={{ fontWeight: "bold", fontSize: "1.1rem" }}>Consulta Pública</Card.Title>
                                <Card.Text>Acesse e explore os dados abertos do Censo Escolar por meio do portal do INEP.</Card.Text>
                                <Button variant="primary">Saiba mais</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
            <br />
        </>
    );
};

export default Cards;
