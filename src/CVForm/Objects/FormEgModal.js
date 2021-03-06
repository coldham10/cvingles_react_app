import React from "react";
import "../../App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";
import Modal from "react-bootstrap/Modal";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

import eg0_0 from "../../images/eg0-0.jpg";
import eg1_0 from "../../images/eg1-0.jpg";
import eg2_0 from "../../images/eg2-0.jpg";
import eg0_1 from "../../images/eg0-1.jpg";
import eg1_1 from "../../images/eg1-1.jpg";
import eg2_1 from "../../images/eg2-1.jpg";

//Example of current format - page selectable
function FormEgModal(props) {
  return (
    <Modal
      centered
      show={props.show}
      onHide={() => {
        props.setShow(false);
        props.setPage(0);
      }}
      size="lg"
    >
      <Modal.Header closeButton className="py-1" />
      <Modal.Body className="p-0">
        <Carousel
          interval={null}
          indicators={false}
          wrap={false}
          slide={false}
          nextIcon={<MdNavigateNext color="black" size="2rem" />}
          prevIcon={<MdNavigateBefore color="black" size="2rem" />}
          activeIndex={props.page}
          onSelect={(page) => props.setPage(page)}
        >
          <Carousel.Item>
            <Image fluid src={[eg0_0, eg1_0, eg2_0][props.options.format]} />
          </Carousel.Item>
          <Carousel.Item>
            <Image fluid src={[eg0_1, eg1_1, eg2_1][props.options.format]} />
          </Carousel.Item>
        </Carousel>
      </Modal.Body>
      <Modal.Footer className="py-1">
        <Row className="mx-auto">
          <Col
            className="py-1 px-2 mx-1"
            style={{
              border: props.page === 0 ? "1px solid black" : "0px solid black",
            }}
            onClick={() => props.setPage(0)}
          >
            1
          </Col>
          <Col
            className="py-1 px-2 mx-1"
            style={{
              border: props.page === 1 ? "1px solid black" : "0px solid black",
            }}
            onClick={() => props.setPage(1)}
          >
            2
          </Col>
        </Row>
      </Modal.Footer>
    </Modal>
  );
}
export default FormEgModal;
