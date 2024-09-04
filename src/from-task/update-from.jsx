import { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import "./style.modules.css";
import logoBlack from "./logo-black.png";
import { Items } from "./helper";
import FormValidationComponent from "./table-omponent";
import ModelComponent from "./boostrap";
import Button from "react-bootstrap/Button";

const FormComponent = () => {
  const [details, setDetails] = useState([]);
  const [details2, setDetails2] = useState([]);
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

  console.log(local);

  useEffect(() => {
    const saveData = JSON.parse(localStorage.getItem("updateData1"));
    console.log(saveData);
    if (saveData) {
      setUpdate(saveData);
    }
  }, [update]);

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

  useEffect(() => {
    const a = JSON.parse(localStorage.getItem("details")) || [];
    a.push(update);
    localStorage.setItem("details", JSON.stringify(a));

    setLocal(a);
  }, []);  

  const handleShow = () => setShow(true);

  const CloseHandler = () => {
    setDetails([]);
    setFormOpen(false);
  };

  let arr = [];

  const HomeClickHandel = () => {
    setDetails(Items());


    setDetails2(Items());
    for (let i = 0; i < details2.length; i++) {
      let id = details2[i].id;
      for (let j = 0; j < local.length; j++) {
        if (id == local[j].id) {
          arr.push(local[j]);
        } else {
          arr.push(details2[i]);
        }
      }
    }
    setDetails(arr);
    setFormOpen(false);
  };

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

    // setUpdate((prevUpdates) => {
    //   const updatedArray = [...prevUpdates, update];
    //   localStorage.setItem("updateData1", JSON.stringify(update));
    //   return updatedArray;
    // })

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
      <div className="header">
        <div>
          <img src={logoBlack} alt="logo" />
        </div>
        <h2> EMPLOYEE DETAILS</h2>
        <div>
          <CgProfile className="icon" />
        </div>
      </div>
      <div className="bodyPart">
        <div className="body-left">
          <Button onClick={HomeClickHandel}>Home</Button>
          <Button onClick={CloseHandler}>Close</Button>
          <Button>Contact</Button>
        </div>

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
            <div className="overflow">
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
