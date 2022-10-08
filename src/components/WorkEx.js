import React from "react";
const WorkEx = (props) => {
  return (
    <>
      <form className="workForm" id={props.formId}>
        <label htmlFor="companyName">Company Name</label>
        <input
          className="companyName"
          id="companyName"
          name="companyName"
          value={props.workProps.companyName}
          onChange={props.handleQualificationChange}
        ></input>
        <label
          htmlFor="courseStudied"
          id="courseStudied"
          name="courseStudied"
          value={props.workProps.companyName}
          onChange={props.handleQualificationChange}
        ></label>
        <label htmlFor="startYear">Start Year</label>
        <input
          className="startYear"
          id="startYear"
          name="startYear"
          value={props.workProps.startYear}
          onChange={props.handleQualificationChange}
        ></input>
        <label htmlFor="endYear">End Year</label>
        <input
          className="endYear"
          id="endYear"
          name="endYear"
          value={props.workProps.endYear}
          onChange={props.handleQualificationChange}
        ></input>
        <label htmlFor="jobRole">Job Role</label>
        <input
          type="text"
          className="jobRole"
          id="jobRole"
          name="jobRole"
          value={props.workProps.jobRole}
          onChange={props.handleQualificationChange}
        />
        <button
          className="deleteBtn"
          onClick={props.deleteForm}
          id={props.formId}
        >
          Delete Form
        </button>
      </form>
    </>
  );
};
export default WorkEx;
