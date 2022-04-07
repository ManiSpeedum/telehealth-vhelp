import React from "react";
import {
  SpdInputtext,
  SpdInputNameLabel,
  SpdInputEmail,
  SpdInputEmailLabel,
  SpdInputNumber,
  SpdInputNumberLabel,
  SpdInputPassword,
  SpdInputPasswordLabel,
  SpdInputRadio,
  SpdInputRadioLabel,
  SpdInputCheckbox,
  SpdInputCheckboxLabel,
  SpdInputFile,
  SpdInputFileLabel,
  SpdInputDate,
  SpdInputDateLabel,
  SpdInputSubmit,
  SpdInputSubmitLabel,
  SpdInputSearch,
  SpdInputSearchLabel,
} from "./SpdFormelement";

function Form() {
  return (
    <div>
      <h1>Form</h1>

      <form>
        <div className="mb-3">
          <div><SpdInputNameLabel /></div>
          <div><SpdInputtext /></div>
        </div>
        
        <div className="mb-3"></div>
        <div><SpdInputEmailLabel /></div>
        <div><SpdInputEmail /></div>
        <div className="mb-3"><SpdInputNumberLabel /></div>
        <div><SpdInputNumber /></div>
        <div className="mb-3"><SpdInputPasswordLabel /></div>
        <div><SpdInputPassword /></div>
        <div></div>
      </form>

      
      
      
      
      
      
      <SpdInputRadio />
      <SpdInputRadioLabel />
      <SpdInputCheckbox />
      <SpdInputCheckboxLabel />
      <SpdInputFile></SpdInputFile>
      <SpdInputFileLabel />
      <SpdInputDate />
      <SpdInputDateLabel />
      <SpdInputSubmit />
      <SpdInputSubmitLabel />
      <SpdInputSearch />
      <SpdInputSearchLabel />
    </div>
  );
}

export default Form;
