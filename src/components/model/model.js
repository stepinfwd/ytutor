import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function MyVerticallyCenteredModal(props) {
  const { data, setData } = props;
  // console.log("MODAL PRP", props);
  const handleChange = (event) => {
    props.setData({ ...data, [event.target.name]: event.target.value });
  };
  const formHandler = (e) => {
    e.preventDefault();
    setData("");
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Enroll Now</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              value={data.name}
              name="name"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Phone number</Form.Label>
            <Form.Control
              type="number"
              placeholder="Number"
              name="phno"
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} type="submit">
          close
        </Button>
        <Button type="submit" onClick={formHandler}>
          Save
        </Button>
        {/* <Button onClick={formHandler}>Save</Button> */}

        {/* <Button onClick={props.onHide}>Close</Button> */}
      </Modal.Footer>
    </Modal>
  );
}
export default MyVerticallyCenteredModal;
