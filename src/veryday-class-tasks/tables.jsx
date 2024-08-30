import { useState } from "react";
import "./style.modules.css";
import { FakeData, Items } from "./jsHelpers";
import UsageComponent from "./table-omponent";
import { CgProfile } from "react-icons/cg";
// import {Images} from './src/veryday-class-tasks/logo-black.png'
import logoBlack from "./logo-black.png";


const TableComponent = () => {
  const [details, setDetails] = useState([]);

  const AddHandler = () => {
    const length = FakeData.length;
    const newRandom = Math.floor(Math.random() * length);
    const result = FakeData[newRandom];
    setDetails([...details, result]);
  };

  const CloseHandler = () => {
    setDetails([]);
  };

  const clickHandel = () => {
    setDetails(FakeData);
  };

  const removeHandler = (targetId) => {
    const filterData = details.filter((each) => each.id != targetId);
    setDetails(filterData);
  };

  return (
    <>
      <div className="header">
        <div>
          <img src={logoBlack}alt="img"  className="logo-black"/>
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
          <div className="overflow">
            <button className="btn" onClick={() => AddHandler()}>Add Card</button>
            <table>
              <UsageComponent details={details} removeHandler={removeHandler} />
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableComponent;
