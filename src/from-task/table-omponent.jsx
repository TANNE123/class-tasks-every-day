import React from "react";

const FormValidationComponent = ({ removeHandler, details }) => {
  return (
    <>
      {details.length > 0 && (
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Remove</th>
          </tr>
        </thead>
      )}
      {details.map((EachEmploy, index) => {
        const { id, name, role } = EachEmploy;

        return (
          <tbody key={index}>
            <tr>
              <td>{name}</td>
              <td>{role}</td>
              <td>
                <button onClick={() => removeHandler(id)}>Remove</button>
              </td>

            </tr>
          </tbody>
        );
      })}
    </>
  );
};

export default FormValidationComponent;
