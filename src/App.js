import "./styles/style.css";
import React from "react";
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      personalInfo: {
        fullName: "",
        professsion: "",
        email: "",
        phone: "",
      },
      education: {
        schoolName: "",
        startYear: "",
        endYear: "",
      },
      workExperience: {
        companyName: "",
        startYear: "",
        endYear: "",
        jobRole: "",
      },
    };
  }

  render() {
    return (
      <div>
        <div className="app">
          <h1>CV buildler</h1>
        </div>
        <section className="personalInfo">
          <h3>Personal Information</h3>
          <form className="personalForm">
            <label htmlFor="fullName">Full Name:</label>
            <input className="fullName" id="fullName" name="fullName"></input>
            <label htmlFor="prof">Profession:</label>
            <input className="prof" id="prof" name="prof"></input>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email"></input>
            <label htmlFor="phone" id="phone">
              Phone Number:
            </label>
            <input type="tel"></input>
          </form>
        </section>

        <section className="educationInfo">
          <h3>Education</h3>
          <form className="eduForm">
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
            <input
              className="startYear"
              id="startYear"
              name="startYear"
            ></input>
            <label htmlFor="endYear">End Year</label>
            <input className="endYear" id="endYear" name="endYear"></input>
            <button className="deleteBtn">Delete Form</button>
          </form>
          <button className="eduBtn">Add Education</button>
        </section>

        <section className="workInfo">
          <h3>Work Experience</h3>
          <form className="workForm">
            <label htmlFor="companyName">Company Name</label>
            <input
              className="companyName"
              id="companyName"
              name="companyName"
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
            ></input>
            <label htmlFor="endYear">End Year</label>
            <input className="endYear" id="endYear" name="endYear"></input>
            <label htmlFor="jobRole">Job Role</label>
            <input type="text" className="jobRole" id="jobRole" />
            <button className="deleteBtn">Delete Form</button>
          </form>
          <button className="eduBtn">Add Work Experience</button>
        </section>
      </div>
    );
  }
}
