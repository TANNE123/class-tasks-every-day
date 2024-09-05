import React from "react";
import ModelComponent from "./boostrap";
import { FaEdit } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

const FormValidationComponent = ({ removeHandler, details,updateHandler,handleShow }) => {
  return (
    <>
      {/* {details.length > 0 && ( */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Remove</th>
            <th>Action</th>
          </tr>
        </thead>
      {/* // )} */}
      {details.map((EachEmploy, index) => {
        const { id, name, role } = EachEmploy;

        return (
          <tbody key={index}>
            <tr>
              <td>{name}</td>
              <td>{role}</td>
              <td style={{padding:"5px 50px 5px 0"}}>
                <Button variant="primary" onClick={() => removeHandler(id)}>Remove</Button>
              </td>
          <td style={{padding:"0 50px 0 0"}}> <Button variant="primary" onClick={()=>updateHandler(id,name,role)} ><FaEdit onClick={handleShow} /></Button></td>
            </tr>
          </tbody>
        );
      })}
    </>
  );
};

export default FormValidationComponent;


