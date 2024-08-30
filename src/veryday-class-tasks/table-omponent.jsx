import React from "react";

const UsageComponent = ({ removeHandler, details }) => {
  return (
    <>
      {details.map((EachEmploy,index) => {
        const { id, category, description, image } = EachEmploy;

        return (
          <React.Fragment key={index}>
            <tr>
              <td>{category}</td>
              <td>{description}</td>
              <td>
                <img src={image} alt="" />
              </td>
              <td>
                <button onClick={() => removeHandler(id)}>Remove</button>
              </td>
            </tr>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default UsageComponent;

