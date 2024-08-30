import React from "react";

const FormValidationComponent = ({ removeHandler, details, Update }) => {
  return (
    <>
      {details.length > 0 && (
        <>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Remove</th>
            <th>Update</th>
          </tr>
        </>
      )}
      {details.map((EachEmploy, index) => {
        const { id, name, role } = EachEmploy;

        return (
          <React.Fragment key={index}>
            <tr>
              <td>{name}</td>
              <td>{role}</td>
              <td>
                <button onClick={() => removeHandler(id)}>Remove</button>
              </td>
              <td>
                <button onClick={() => Update(id)}>Update</button>
              </td>
            </tr>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default FormValidationComponent;
