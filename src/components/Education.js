import React from "react";

const Education = (props) => {
  return (
    <>
      <form className="eduForm" id={props.formId}>
        <label htmlFor="schoolName">Name of School</label>
        <input
          className="schoolName"
          id="schoolName"
          name="schoolName"
          value={props.eduProps.schoolName}
          onChange={props.handleQualificationChange}
        ></input>
        <label
          htmlFor="courseStudied"
          id="courseStudied"
          name="courseStudied"
        ></label>
        <label htmlFor="startYear">Start Year</label>
        <input
          className="startYear"
          id="startYear"
          name="startYear"
          value={props.eduProps.startYear}
          onChange={props.handleQualificationChange}
        ></input>
        <label htmlFor="endYear">End Year</label>
        <input
          className="endYear"
          id="endYear"
          name="endYear"
          value={props.eduProps.endYear}
          onChange={props.handleQualificationChange}
        ></input>
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

export default Education;
