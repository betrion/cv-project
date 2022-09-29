import React, { Component } from "react";
export default class WorkEx extends Component {
  render() {
    return (
      <>
        <form className="workForm" id={this.props.formId}>
          <label htmlFor="companyName">Company Name</label>
          <input
            className="companyName"
            id="companyName"
            name="companyName"
            value={this.props.workProps.companyName}
            onChange={this.props.handleQualificationChange}
          ></input>
          <label
            htmlFor="courseStudied"
            id="courseStudied"
            name="courseStudied"
            value={this.props.workProps.companyName}
            onChange={this.props.handleQualificationChange}
          ></label>
          <label htmlFor="startYear">Start Year</label>
          <input
            className="startYear"
            id="startYear"
            name="startYear"
            value={this.props.workProps.startYear}
            onChange={this.props.handleQualificationChange}
          ></input>
          <label htmlFor="endYear">End Year</label>
          <input
            className="endYear"
            id="endYear"
            name="endYear"
            value={this.props.workProps.endYear}
            onChange={this.props.handleQualificationChange}
          ></input>
          <label htmlFor="jobRole">Job Role</label>
          <input
            type="text"
            className="jobRole"
            id="jobRole"
            name="jobRole"
            value={this.props.workProps.jobRole}
            onChange={this.props.handleQualificationChange}
          />
          <button
            className="deleteBtn"
            onClick={this.props.deleteForm}
            id={this.props.formId}
          >
            Delete Form
          </button>
        </form>
      </>
    );
  }
}
