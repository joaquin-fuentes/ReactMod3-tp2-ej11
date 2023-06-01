import { Row, Col, Card, Button} from "react-bootstrap"
import Noticia from "./Noticia";

const ListaNoticias = () => {
    return (

        <Row className='p-5'>
            <Noticia></Noticia>
            <Noticia></Noticia>
            <Noticia></Noticia>
            <Noticia></Noticia>
            <Noticia></Noticia>
            <Noticia></Noticia>
            <Noticia></Noticia>
        </Row>

    );
};

export default ListaNoticias;