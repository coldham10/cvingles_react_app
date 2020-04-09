import React from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import { withRouter } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { IoIosArrowDown } from "react-icons/io";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.setOptions = this.props.setOptions;
  }

  submit(service) {
    const newOpts = { ...this.props.options };
    newOpts.service = service;
    this.setOptions(newOpts);
    this.props.history.push("/empiece");
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Container fluid className="m-0 p-0">
          <Carousel
            className="mb-0 pb-0"
            pauseOnHover={false}
            interval={6000}
            indicators={false}
            controls={false}
          >
            <Carousel.Item className="mb-0 pb-0">
              <Card style={{ border: "none" }}>
                <Card.Body className="py-0 overflow-hidden carousel-card">
                  <Image
                    as={Card.Image}
                    className="vh-100 carousel-image"
                    src="suit-pro.jpg"
                  />
                  <Card.ImgOverlay className="mb-0 pb-0">
                    <Card.Title className="text-center">
                      <h1 className="overlay-h1">Profesional</h1>
                    </Card.Title>
                  </Card.ImgOverlay>
                </Card.Body>
              </Card>
              <Carousel.Caption>
                <h3 className="carousel-subtitle">
                  Deja que su próximo empleador vea lo mejor de usted
                </h3>
                <br />
                <IoIosArrowDown className="scroll-indicator" />
                <IoIosArrowDown className="scroll-indicator delayed-15" />
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className="mb-0 pb-0">
              <Card style={{ border: "none" }}>
                <Card.Body className="py-0 overflow-hidden carousel-card">
                  <Image
                    as={Card.Image}
                    className="vh-100 carousel-image"
                    src="dark-english.jpg"
                  />
                  <Card.ImgOverlay className="mb-0 pb-0">
                    <Card.Title className="text-center">
                      <h1 className="overlay-h1">Nativo</h1>
                    </Card.Title>
                  </Card.ImgOverlay>
                </Card.Body>
              </Card>
              <Carousel.Caption>
                <h3 className="carousel-subtitle">
                  Su hoja de vida revisada por un profesional nativo
                  angloparlante
                </h3>
                <br />
                <IoIosArrowDown className="scroll-indicator" />
                <IoIosArrowDown className="scroll-indicator delayed-15" />
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className="mb-0 pb-0">
              <Card style={{ border: "none" }}>
                <Card.Body className="py-0 overflow-hidden carousel-card">
                  <Image
                    as={Card.Image}
                    className="vh-100 carousel-image"
                    src="splash.jpg"
                  />
                  <Card.ImgOverlay className="mb-0 pb-0">
                    <Card.Title className="text-center">
                      <h1 className="overlay-h1 overlay-h1-long">
                        Impresionante
                      </h1>
                    </Card.Title>
                  </Card.ImgOverlay>
                </Card.Body>
              </Card>
              <Carousel.Caption>
                <h3 className="carousel-subtitle">
                  Formato muy profesional y elegante
                </h3>
                <br />
                <IoIosArrowDown className="scroll-indicator" />
                <IoIosArrowDown className="scroll-indicator delayed-15" />
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>

        <Container className="my-3 p-3" id="servicios">
          <h1 className="my-3">Que hacemos?</h1>
          <p className="p-2">
            Incluso si usted ha trabajado en inglés durante años y habla muy
            bien, aún escribir como nativo angloparlante queda muy dificil.
            Perceptiblemente no nativo, y no acostumbrado a las costumbres
            angloparlantes de escribir CVs o résumés, muchas veces empleadores{" "}
            <strong>no ven quien es usted, sino solo que es extranjero</strong>.
          </p>
          <p className="p-2">
            Nuestro <strong>equipo de editores nativos angloparlantes</strong>{" "}
            puede modificar su hoja de vida para decir lo que quiere como si
            fuera inglés su idioma primera. Si no esta comodo o tiene un sentido
            dificil traducir a inglés, también tenemos hispanohablantes
            bilingües que pueden trabajar mano a mano con nuestros editores para
            traducir y refinar exactamente que quiere decir.
          </p>
          <p className="p-2">
            Además con nuestro servicio Profesional, asignamos un editor
            personal a usted para revisar la estructra de su CV, enfocarlo en
            sus habilidades mas importantes, y hablamos con usted hasta que
            juntos hemos hecho{" "}
            <strong>
              una hoja de vida que muestra lo mejor que tiene a su proximo
              empleador
            </strong>
            .
          </p>
        </Container>

        <Container fluid className="m-0 main-c2">
          <Container className="mt-3 py-3 px-1 p-md-3">
            <h1 className="my-3 px-3">Nuestros opciones</h1>

            <Container className="py-3 px-1">
              <Card bg="light">
                <Card.Header>
                  <h4 className="p-1">
                    Servicio de Lujo{/*Profesional, Perfeccion de contenido?*/}
                  </h4>
                </Card.Header>
                <Card.Body>
                  <p className="p-2 pt-md-3">
                    Un inversión en su carrera y en usted mismo, este opcion es
                    nuestro servicio premium.
                  </p>
                  <p className="p-2">
                    Subimos su hoja de vida a la primera de la pila con cambios
                    que muestran{" "}
                    <strong>
                      no solo que ha hecho, sino también cuales habilidades
                      especiales tiene
                    </strong>
                    . Epitomamos los detalles mas importantes a empleadores en
                    su región elegida y conversamos con usted para muestrar al
                    mundo todo lo que puede hacer.
                  </p>
                  <p className="p-2">
                    <strong>
                      Incluye también formato impesionante, edición de copia y
                      traducción si es necesario.
                    </strong>
                  </p>
                  <Button variant="secondary" onClick={() => this.submit("p")}>
                    Empiece
                  </Button>
                </Card.Body>
              </Card>
            </Container>

            <Container className="py-3 px-1">
              <Card bg="light">
                <Card.Header>
                  <h4 className="p-1 pt-2">Traducción Profesional</h4>
                </Card.Header>
                <Card.Body>
                  <p className="p-2 pt-md-3">
                    A pesar de la mejora de la traducción automática, es todavía
                    obvio cuando ha usado el traductor de Google - no tiene
                    fluidez y es dificil etender.
                  </p>
                  <p className="p-2">
                    Con este servicio, su hoja de vida es traducido de español
                    por nuestro equipo de hispanohablantes bilingües y luego
                    editado por nuestro equipo angloparlante. El resultado es{" "}
                    <strong>
                      un CV en inglés fluido y nativo con exactamente el mismo
                      sentido que su hoja de vida en español
                    </strong>
                    .
                  </p>
                  <p className="p-2">
                    <strong>
                      Incluye también formato impesionante y edición de copia.
                    </strong>
                  </p>
                  <p className="p-2">
                    <Button
                      variant="secondary"
                      onClick={() => this.submit("t")}
                    >
                      Empiece
                    </Button>
                  </p>
                </Card.Body>
              </Card>
            </Container>

            <Container className="py-3 px-1">
              <Card bg="light">
                <Card.Header>
                  <h4 className="p-1">Inglés Nativo</h4>
                </Card.Header>
                <Card.Body>
                  <p className="p-2 pt-md-3">
                    Nuestro equipo de editores nativos angloparlantes modifica
                    su hoja de vida hasta que el inglés está fluido y nativo.
                    Con este servicio{" "}
                    <strong>
                      eliminamos toda la evidencia que no es angloparlante
                      nativo
                    </strong>{" "}
                    sin cambiar que quieres decir.
                  </p>
                  <p className="p-2">
                    <strong>Incluye también formato impresionante.</strong>
                  </p>
                  <Button variant="secondary" onClick={() => this.submit("i")}>
                    Empiece
                  </Button>
                </Card.Body>
              </Card>
            </Container>
          </Container>
        </Container>
      </>
    );
    /*TODO: third card = Impresionante with sample CVs*/
  }
}

//
export default withRouter(Home);
