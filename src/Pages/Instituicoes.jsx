import { useState, useEffect } from 'react';
import { Button, Col, Container, Form, Modal, Row, Table } from 'react-bootstrap';
import instituicoesBase from '../datasets/censoescolar';
import cidadesEstados from '../datasets/cidade-estado';
import './Instituicoes.css';

const InstituicaoEnsino = () => {
    const [instituicaoEnsino, setInstituicaoEnsino] = useState({
        codigo: '',
        nome: '',
        uf: '',
        municipio: '',
        regiao: '',
        qt_mat_bas: '',
        qt_mat_prof: '',
        qt_mat_eja: '',
        qt_mat_esp: ''
    });

    const [show, setShow] = useState(false);
    const [municipios, setMunicipios] = useState([]);
    const [listaInstituicoes, setListaInstituicoes] = useState([]);

    useEffect(() => {
        const dadosSalvos = JSON.parse(localStorage.getItem('instituicoes')) || [];
        setListaInstituicoes([...instituicoesBase, ...dadosSalvos]);
    }, []);

    const handleShow = () => setShow(!show);

    const handleSubmit = (event) => {
        event.preventDefault();

        const dadosSalvos = JSON.parse(localStorage.getItem('instituicoes')) || [];
        const novosDados = [...dadosSalvos, instituicaoEnsino];
        localStorage.setItem('instituicoes', JSON.stringify(novosDados));

        setListaInstituicoes([...listaInstituicoes, instituicaoEnsino]);

        setInstituicaoEnsino({
            codigo: '',
            nome: '',
            uf: '',
            municipio: '',
            regiao: '',
            qt_mat_bas: '',
            qt_mat_prof: '',
            qt_mat_eja: '',
            qt_mat_esp: ''
        });

        setShow(false);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name === 'uf') {
            const listaMunicipios = cidadesEstados[value] || [];
            setMunicipios(listaMunicipios);

            const estadoSelecionado = cidadesEstados.estados.find(uf => uf.value === value);
            const regiao = estadoSelecionado ? estadoSelecionado.regiao : '';

            setInstituicaoEnsino({
                ...instituicaoEnsino,
                uf: value,
                municipio: '',
                regiao: regiao
            });
        } else {
            setInstituicaoEnsino({ ...instituicaoEnsino, [name]: value });
        }
    };

    return (
        <Container className="mt-2">
            {/* Barra de busca e botão */}
            <Row className="mt-5 mb-5">
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
                            <Button variant="primary" onClick={handleShow}> + </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>

            {/* Tabela */}
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
                                <th>Mat. Prof.</th>
                                <th>Mat. EJA</th>
                                <th>Mat. Esp.</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listaInstituicoes.map((inst, i) => (
                                <tr key={i}>
                                    <td>{inst.codigo}</td>
                                    <td>{inst.nome}</td>
                                    <td>{inst.no_uf || inst.uf}</td>
                                    <td>{inst.no_municipio || inst.municipio}</td>
                                    <td>{inst.no_regiao || inst.regiao}</td>
                                    <td>{inst.qt_mat_bas}</td>
                                    <td>{inst.qt_mat_prof}</td>
                                    <td>{inst.qt_mat_eja}</td>
                                    <td>{inst.qt_mat_esp}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>

            {/* Modal */}
            <Modal show={show} onHide={handleShow} dialogClassName="modal-80w">
                <Modal.Header closeButton>
                    <Modal.Title>Instituição de Ensino</Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleSubmit}>
                    <Modal.Body>
                        <Row>
                            <Col sm={3}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Código</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="codigo"
                                        value={instituicaoEnsino.codigo}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>
                            </Col>
                            <Col sm={9}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Nome</Form.Label>
                                    <Form.Control
                                        type="text"
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
                                <Form.Group className="mb-3">
                                    <Form.Label>UF</Form.Label>
                                    <Form.Select
                                        name="uf"
                                        value={instituicaoEnsino.uf}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Selecione UF</option>
                                        {cidadesEstados.estados.map(uf => (
                                            <option key={uf.value} value={uf.value}>
                                                {uf.label}
                                            </option>
                                        ))}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Município</Form.Label>
                                    <Form.Select
                                        name="municipio"
                                        value={instituicaoEnsino.municipio}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Selecione Município</option>
                                        {municipios.map(m => (
                                            <option key={m.value} value={m.value}>
                                                {m.label}
                                            </option>
                                        ))}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Região</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="regiao"
                                        value={instituicaoEnsino.regiao}
                                        readOnly
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Mat. Básico</Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="qt_mat_bas"
                                        value={instituicaoEnsino.qt_mat_bas}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Mat. Prof.</Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="qt_mat_prof"
                                        value={instituicaoEnsino.qt_mat_prof}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Mat. EJA</Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="qt_mat_eja"
                                        value={instituicaoEnsino.qt_mat_eja}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Mat. Esp.</Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="qt_mat_esp"
                                        value={instituicaoEnsino.qt_mat_esp}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleShow}>
                            Fechar
                        </Button>
                        <Button type="submit" variant="primary">
                            Salvar
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </Container>
    );
};

export default InstituicaoEnsino;
