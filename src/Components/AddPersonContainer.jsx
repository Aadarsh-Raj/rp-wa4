import React, { useState } from "react";
import PersonTable from "./PersonTable";
import Button from "./Button";
import "./Style/addpersoncontainer.css";
import AddForm from "./AddForm";
const AddPersonContainer = (prop) => {
  const [formContainer, setFormContainer] = useState("");

  function showForm() {
    if (formContainer == "") {
      setFormContainer(<AddForm />);
    } else {
      setFormContainer("");
    }
  }
  return (
    <>
      <div className="addContainer-inner">
        <div className="title-div">
          <p className="container-title">Add New Person</p>
          <Button btnValue="+" outputValue="" func={() => showForm()} />
        </div>
        {formContainer}
        <PersonTable />
      </div>
    </>
  );
};

export default AddPersonContainer;
