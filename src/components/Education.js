import React, { Component } from "react";

export default class Education extends Component {
  render() {
    // const [eduForm] = this.props.map();
    // function educationForm() {}
    return (
      <>
        <form className="eduForm" id={this.props.id}>
          <label htmlFor="schoolName">Name of School</label>
          <input
            className="schoolName"
            id="schoolName"
            name="schoolName"
          ></input>
          <label
            htmlFor="courseStudied"
            id="courseStudied"
            name="courseStudied"
          ></label>
          <label htmlFor="startYear">Start Year</label>
          <input className="startYear" id="startYear" name="startYear"></input>
          <label htmlFor="endYear">End Year</label>
          <input className="endYear" id="endYear" name="endYear"></input>
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
