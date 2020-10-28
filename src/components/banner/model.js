import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function MyVerticallyCenteredModal(props) {
  console.log("rpop", props);
  const { data } = props;
  console.log("rpop2", data.email);
  console.log("func", props.setData);

  const handleChange = (event) => {
    console.log("changed", data.name);
    props.setData({ ...data, name: event.target.value });
  };
  return (
    <form>
      {/* <Form.Label>{props.data.name}</Form.Label> */}
      <input
        type="text"
        placeholder="Enter Name"
        // value={data.name}
        onChange={handleChange}
      />
      <Form.Label>Email address</Form.Label>
      <input
        type="email"
        placeholder={data.email}
        value={data.email}
        // onChange={(value) => handleChange(value)}
      />
      <Form.Label>Phone number</Form.Label>
      <input
        type="number"
        placeholder="Number"
        value={data.phno}
        // onChange={(value) => handleChange(value)}
      />
    </form>
  );
}
export default MyVerticallyCenteredModal;
