import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

function ModelComponent({ handleClose, show, Name, nameHandler }) {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <dt>
            <label>Name :</label>
          </dt>
          <input
            type="text"
            name="name"
            value={Name.name}
            onChange={nameHandler}
          />
        </Modal.Body>
        <Modal.Body>
          <dt>Role</dt>{" "}
          <input
            type="text"
            name="role"
            value={Name.role}
            onChange={nameHandler}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModelComponent;
