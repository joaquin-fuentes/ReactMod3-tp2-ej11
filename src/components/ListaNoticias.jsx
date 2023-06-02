import { Row, Spinner } from "react-bootstrap"
import Noticia from "./Noticia";
import { useState, useEffect } from "react"


const ListaNoticias = () => {

    const [noticia, setNoticia] = useState({});
     const [mostrarSpinner, setMostrarSpinner] = useState(true)


    // el siguiente useEffect es solamente para montaje
    useEffect(() => {
        consultarAPI();
    }, [])


    const consultarAPI = async () => {
        try {
             setMostrarSpinner(true)
            const respuesta = await fetch("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=f85714cdd32b4a49ac30e059915ac8dd");
            const dato = await respuesta.json()
            console.log(respuesta)
            console.log(dato)
            setNoticia(dato)

            //ocultar el spinner, si queremos le podemos dar tiempo, o sino no..
             setTimeout(() => {
                 setMostrarSpinner(false)
             }, 300)
        } catch (error) {
            console.log(error)
        }
    }

     const mostrarComponente = (mostrarSpinner) ? (
             <Spinner animation="border" variant="primary"></Spinner>
         ) : (
         noticia.articles.map((noticia, indice) =>{
           return  <Noticia noticia={noticia} key={indice} className="d-flex"></Noticia>
         })
     )

    return (

        <Row className='p-5'>
            {
                mostrarComponente
            }
        </Row>

    );
};

export default ListaNoticias;