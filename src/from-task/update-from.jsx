import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import "./style.modules.css";
import logoBlack from "./logo-black.png";
import { Items } from "./helper";
import FormValidationComponent from "./table-omponent";
import Form from "./formcomponent";

const FormComponent = () => {
  const [details, setDetails] = useState([]);
  const [name, setNames] = useState("");
  const [role, setValues] = useState("");
  const [target, setTarget] = useState("");

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

  const CloseHandler = () => {
    setDetails([]);
    setFormOpen(false);
  };

  const clickHandel = () => {
    setDetails(Items());
    setFormOpen(false);
  };

  const removeHandler = (targetId) => {
    const filterData = details.filter((each) => each.id != targetId);
    setDetails(filterData);
    setFormOpen(false);
  };

  const UpdateHandler = (targetId) => {
    setFormOpen(true);
    const filter = details.filter((each) => each.id == targetId);

    if (filter) {
      setNames(filter.name);
      setValues(filter.role);
      setTarget(targetId);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (target) {
      setDetails(
        details.map((emp) => (emp.id === target ? { ...emp, name, role } : emp))
      );
    }
    setFormOpen(false);
  };

  return (
    <>
      <div className="header">
        <div>
          <img src={logoBlack} />
        </div>
        <h2> WELCOME TO SHOPPING </h2>
        <div>
          <CgProfile className="icon" />
        </div>
      </div>
      <div className="bodyPart">
        <div className="body-left">
          <button onClick={clickHandel}>Home</button>
          <button onClick={CloseHandler}>close</button>
          <button>Contact</button>
        </div>

        <div className="body-right">
          <div>
            {FormOpen ? (
              <Form
                valueName={name}
                ValueRole={role}
                setName={setNames}
                setRole={setValues}
                handleSubmit={handleSubmit}
              />
            ) : (
              ""
            )}
          </div>
          <div>
            <div className="overflow">
              <button className="btn" onClick={() => AddHandler()}>
                Add Card
              </button>
              <table>
                <FormValidationComponent
                  details={details}
                  removeHandler={removeHandler}
                  Update={UpdateHandler}
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
