import { useState } from 'react';
import {
    Button,
    Col,
    Container,
    Form,
    Modal,
    Row,
    Table,
} from 'react-bootstrap';
import instituicoesEnsino from '../datasets/censoescolar';
import cidadesEstados from '../datasets/cidade-estado'; 
import './Instituicoes.css';

const InstituicaoEnsino = () => {
    const [instituicaoEnsino, setInstituicaoEnsino] = useState({
        codigo: '',
        nome: '',
        uf: '',
        municipio: '',
        regiao: '',
    });

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(!show);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInstituicaoEnsino({ ...instituicaoEnsino, [name]: value });
    };

    return (
        <Container className="mt-2">
            <Row className="mt-5 mb-5 ">
                <Col>
                    <Row className="align-items-center">
                        <Col xs={8}>
                            <Form className="d-flex">
                                <Form.Control
                                    type="text"
                                    placeholder="Buscar"
                                    className="me-2"
                                />
                                <Button type="submit">Pesquisar</Button>
                            </Form>
                        </Col>
                        <Col xs={4} className="text-end">
                            <Button style={{ float: 'right' }} variant="primary" onClick={handleShow}> + </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row className="mt-2">
                <Col>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>Código</th>
                                <th>Nome</th>
                                <th>UF</th>
                                <th>Município</th>
                                <th>Região</th>
                                <th>Mat. Básico</th>
                                <th>Mat. da Educação Profissional</th>
                                <th>Mat. da Educação de Jovens e Adultos (EJA)</th>
                                <th>Mat. da Educação Especial</th>
                            </tr>
                        </thead>
                        <tbody>
                            {instituicoesEnsino.map((instituicaoEnsino, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{instituicaoEnsino.codigo}</td>
                                        <td>{instituicaoEnsino.nome}</td>
                                        <td>{instituicaoEnsino.no_uf}</td>
                                        <td>{instituicaoEnsino.no_municipio}</td>
                                        <td>{instituicaoEnsino.no_regiao}</td>
                                        <td>{instituicaoEnsino.qt_mat_bas}</td>
                                        <td>{instituicaoEnsino.qt_mat_prof}</td>
                                        <td>{instituicaoEnsino.qt_mat_eja}</td>
                                        <td>{instituicaoEnsino.qt_mat_esp}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                </Col>
            </Row>

            <Modal show={show} onHide={handleShow} dialogClassName="modal-80w">
                <Modal.Header closeButton>
                    <Modal.Title>Instituição de Ensino</Modal.Title>
                </Modal.Header>
                <Form>
                    <Modal.Body>
                        <Row>
                            <Col sm={3}>
                                <Form.Group className="mb-3" controlId="formGroupCodigo">
                                    <Form.Label>Código</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Código"
                                        name="codigo"
                                        value={instituicaoEnsino.codigo}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>
                            </Col>
                            <Col sm={9}>
                                <Form.Group className="mb-3" controlId="formGroupNome">
                                    <Form.Label>Nome</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Nome"
                                        name="nome"
                                        value={instituicaoEnsino.nome}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formGroupUF">
                                    <Form.Label>UF</Form.Label>
                                    <Form.Select
                                        name="uf"
                                        value={instituicaoEnsino.uf}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Selecione UF</option>
                                        {cidadesEstados.estados.map(uf => (
                                            <option key={uf.value} value={uf.value}> {uf.label} </option>
                                        ))}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formGroupMunicipio">
                                    <Form.Label>Município</Form.Label>
                                    <Form.Select
                                        name="municipio"
                                        value={instituicaoEnsino.municipio}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Selecione Município</option>
                                        {(cidadesEstados[instituicaoEnsino.uf] || []).map(m => (
                                            <option key={m.value} value={m.value}>{m.label}</option>
                                        ))}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formGroupRegiao">
                                    <Form.Label>Região</Form.Label>
                                    <Form.Select
                                        name="regiao"
                                        value={instituicaoEnsino.regiao}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Selecione Região</option>
                                        <option value="Norte">Norte</option>
                                        <option value="Nordeste">Nordeste</option>
                                        <option value="Centro-Oeste">Centro-Oeste</option>
                                        <option value="Sudeste">Sudeste</option>
                                        <option value="Sul">Sul</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleShow}>
                            Fechar
                        </Button>
                        <Button variant="danger">Apagar</Button>
                        <Button type="submit" variant="primary" onClick={handleShow}>
                            Salvar
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </Container>
    );
};

export default InstituicaoEnsino;
