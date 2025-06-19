import { useState } from "react";
import { Button, Row, Col, Table, Form, Modal } from "react-bootstrap";
import pessoasDataset from "../Datasets/pessoas.js";

const Instituicoes = () => {
    const [pessoas, setPessoas] = useState(pessoasDataset);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const removerPessoa = (id) => {
        const pessoasAtualizadas = pessoas.filter((pessoa) => pessoa.id !== id);
        setPessoas(pessoasAtualizadas);
    };

    return (
        <main>
            <div className="container">
                {/* Barra de busca e botão de adicionar */}
                <Row className="mt-5 mb-3 align-items-center justify-content-center">
                    <Col xs={12} md={10} lg={8}>
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

                {/* Tabela de pessoas */}
                <Row className="justify-content-center">
                    <Col xs={12} md={10} lg={8}>
                        <Table striped bordered hover className="mt-5">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nome</th>
                                    <th>Sobrenome</th>
                                    <th>CPF</th>
                                    <th>Nascimento</th>
                                    <th>Opções</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pessoas.map((pessoa, i) => (
                                    <tr key={i}>
                                        <td>{pessoa.id}</td>
                                        <td>{pessoa.nome}</td>
                                        <td>{pessoa.sobrenome}</td>
                                        <td>{pessoa.cpf}</td>
                                        <td>{pessoa.nascimento}</td>
                                        <td>
                                            <Button
                                                className="m-2"
                                                variant="danger"
                                                onClick={() => removerPessoa(pessoa.id)}
                                            >
                                                Remover
                                            </Button>
                                            <Button className="m-2" variant="primary">
                                                Editar
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>

                {/* Modal */}
                <Modal show={show} onHide={handleClose} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Adicionar Pessoa</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Formulário de cadastro
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Fechar
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Salvar
                        </Button>
                    </Modal.Footer>
                </Modal>

            </div>
        </main>
    );
};

export default Instituicoes;
