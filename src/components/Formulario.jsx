import { Form, Row, Col } from "react-bootstrap"
import ListaNoticias from "./ListaNoticias";

const Formulario = () => {
    return (
        <Form className="p-0">
            <Form.Group as={Row} className=" p-5" controlId="formHorizontalEmail">
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
            <hr></hr>
            <ListaNoticias></ListaNoticias>
        </Form>
    );
};

export default Formulario;