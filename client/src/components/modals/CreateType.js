import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { createType } from "../../http/deviceApi";

const CreateType = ({ show, onHide }) => {
  const [value, setValue] = useState("");

  const addType = () => {
    createType({ name: value }).then(() => {
      setValue("");
      onHide();
    });
  };
  return (
    <Modal size="lg" centered show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Create Type</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            placeholder="Enter type name"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant={"outline-danger"} onClick={onHide}>
          Close
        </Button>
        <Button variant={"outline-success"} onClick={addType}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateType;
