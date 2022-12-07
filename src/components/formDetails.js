import React, { useState } from "react";
import Select from "react-select";
import { form_texts } from "../mockups/dummy-texts";
import { form_groups } from "../mockups/form-data";
import { ToastContainer, toast } from "react-toastify";

const FormDetails = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectFields, setSelectFields] = useState({
    username: "",
    terms: false,
  });

  const onChangeHandler = (e) => {
    setSelectFields({ ...selectFields, [e.target.name]: e.target.value });
  };

  const onSelectChange = (sectors) => {
    setSelectedOption(sectors);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (selectedOption === null) {
      toast.warn("Sector is mendatory to select !");
    } else {
      localStorage.setItem("SectorLabel", selectedOption.label);
      localStorage.setItem("formFields", selectFields);
      toast.success("Data saved successfully !");
    }
  };

  return (
    <React.Fragment>
      <div className="form-details-container">
        <h5>{form_texts.DEADING}</h5>
        <form onSubmit={onSubmitForm}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">{form_texts.USERNAME}</label>
            <input
              type="text"
              className="form-control"
              name="username"
              placeholder="Enter username..."
              onChange={onChangeHandler}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">{form_texts.SECTOR}</label>
            <Select
              value={selectedOption}
              onChange={onSelectChange}
              options={form_groups}
              placeholder="Select Sectors..."
            />
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              name="terms"
              onChange={onChangeHandler}
              required
            />
            <label className="form-check-label" for="exampleCheck1">
              {form_texts.TERMS}
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            {form_texts.SAVE}
          </button>
        </form>
      </div>
      <ToastContainer />
    </React.Fragment>
  );
};

export default FormDetails;
