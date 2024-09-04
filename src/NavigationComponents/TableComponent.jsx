import { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import Button from "react-bootstrap/Button";
import { Items } from "../from-task/helper";
import FormValidationComponent from "../from-task/table-omponent";
import ModelComponent from "../from-task/boostrap";

const FormComponent = () => {
  const [details, setDetails] = useState(Items());
  const [FormOpen, setFormOpen] = useState(false);
  const [show, setShow] = useState(false);

  const [update, setUpdate] = useState([
    {
      id: "",
      name: "",
      role: "",
    },
  ]);

  const [local, setLocal] = useState();

  const handleClose = () => {
    setDetails((prevDetails) =>
      prevDetails.map((each) => {
        if (each.id === update.id) {
          return { ...each, name: update.name, role: update.role };
        }
        return each;
      })
    );
    setShow(false);
  };


  const handleShow = () => setShow(true);

  const removeHandler = (targetId) => {
    const filterData = details.filter((each) => each.id != targetId);
    setDetails(filterData);
    setFormOpen(false);
  };

  const updateHandler = (targetId, targetName, targetRole) => {
    const newUpdate = {
      id: targetId,
      name: targetName,
      role: targetRole,
    };

    setUpdate(newUpdate);

    
    setFormOpen(true);
    setShow(true);
  };




  const nameHandler = (event) => {
    const { name, value } = event.target;
    setUpdate((prevState) => ({
      ...prevState,
      [name]: value,
    }));




  };

  const AddHandler = () => {
    const length = details.length;
    const AddDetails = {
      id: length + 1,
      name: "rahul",
      role: "java Developer",
    };
    setDetails([...details, AddDetails]);
    setFormOpen(false);
  };

  return (
    <>
      <div className="bodyPart">
        <div className="body-right">
          <div>
            {FormOpen ? (
              <ModelComponent
                handleShow={handleShow}
                handleClose={handleClose}
                show={show}
                Name={update}
                nameHandler={nameHandler}
              />
            ) : (
              ""
            )}
          </div>
          <div>
            <div className="overflow1">
              <Button className="btn" onClick={() => AddHandler()}>
                Add Card
              </Button>
              <table>
                <FormValidationComponent    
                  details={details}
                  removeHandler={removeHandler}
                  updateHandler={updateHandler}
                  handleShow={handleShow}
                />
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormComponent;










// let arr = [];
//   const HomeClickHandel = () => {
//     setDetails(Items());


//     setDetails2(Items());
//     for (let i = 0; i < details2.length; i++) {
//       let id = details2[i].id;
//       for (let j = 0; j < local.length; j++) {
//         if (id == local[j].id) {
//           arr.push(local[j]);
//         } else {
//           arr.push(details2[i]);
//         }
//       }
//     }
//     setDetails(arr);
//     setFormOpen(false);
//   };







//   const CloseHandler = () => {
//     setDetails([]);
//     setFormOpen(false);
//   };





   // setUpdate((prevUpdates) => {
    //   const updatedArray = [...prevUpdates, update];
    //   localStorage.setItem("updateData1", JSON.stringify(update));
    //   return updatedArray;
    // })




    // const a = JSON.parse(localStorage.getItem("details")) || [];
    // a.push(update);
    // localStorage.setItem("details", JSON.stringify(a));
    // setLocal(a);
