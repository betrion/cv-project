import "./styles/style.css";
import React from "react";
import Personal from "./components/Personal";
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      personalInfo: {
        fullName: "sad",
        profession: "",
        email: "",
        phone: "",
      },
      educations: [
        {
          schoolName: "",
          startYear: "",
          endYear: "",
          id: Math.round(Math.random() * 100000),
        },
      ],
      workExperiences: [
        {
          companyName: "",
          startYear: "",
          endYear: "",
          jobRole: "",
          id: Math.round(Math.random() * 100000),
        },
      ],
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (e) => {
    const value = e.target.value;
    console.log(value);
    this.setState((prevstate) => ({
      personalInfo: {
        ...prevstate.personalInfo,
        [e.target.name]: value,
      },
    }));
  };
  render() {
    return (
      <div>
        <div className="app">
          <h1>CV buildler</h1>
        </div>
        <section className="personalInfo">
          <Personal
            personalInfo={this.state.personalInfo}
            handleChange={this.handleChange}
          />
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
