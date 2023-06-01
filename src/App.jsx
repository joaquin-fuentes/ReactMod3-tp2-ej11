import "./App.css"
import Footer from "./components/Footer";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import {Container} from "react-bootstrap"

const App = () => {
  return (
    <>
     <Header></Header>
     <Container className="mainPage my-5">
        <Formulario>

        </Formulario>
     </Container>
     <Footer></Footer>
    </>
  );
};

export default App;