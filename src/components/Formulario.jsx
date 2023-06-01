import { Form, Row, Col } from "react-bootstrap"

const Formulario = () => {
    return (
        <Form className="border p-5">
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                <Form.Label column sm={4} className="text-center">
                    Buscar por categoria:
                </Form.Label>
                <Col sm={8}>
                    <Form.Select aria-label="Default select example">
                        <option>Seleccione una categoria</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </Col>
            </Form.Group>
            
        </Form>
    );
};

export default Formulario;