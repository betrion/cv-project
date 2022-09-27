import "./styles/style.css";
import React from "react";
import Personal from "./components/Personal";
import Education from "./components/Education";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      personalInfo: {
        fullName: "",
        profession: "",
        email: "",
        phone: "",
      },
      educations: [],
      workExperiences: [
        {
          id: Math.round(Math.random() * 10000),
          companyName: "",
          startYear: "",
          endYear: "",
          jobRole: "",
        },
      ],
    };
    this.handleChange = this.handleChange.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.handleEduChange = this.handleEduChange.bind(this);
    this.addEduform = this.addEduform.bind(this);
    this.deleteForm = this.deleteForm.bind(this);
  }
  handleChange = (e) => {
    const value = e.target.value;
    this.setState((prevstate) => ({
      personalInfo: {
        ...prevstate.personalInfo,
        [e.target.name]: value,
      },
    }));
  };
  handleEduChange = (e) => {
    // ružno odrađeno, izvuci objekt iz statea, uredi ga i zabij nazad..
    const eduProp = [...this.state.educations];
    const eduPropIndex = eduProp.findIndex(
      (eduValue) =>
        parseInt(eduValue.id) === parseInt(e.target.parentElement.id)
    );
    eduProp[eduPropIndex][e.target.name] = e.target.value;
    this.setState({ educations: eduProp });
  };
  addEducation = () => {
    this.setState((prevstate) => ({
      educations: [
        ...prevstate.educations,
        {
          id: Math.round(Math.random() * 10000),
          schoolName: "",
          startYear: "",
          endYear: "",
        },
      ],
    }));
  };
  addEduform = () => {
    return this.state.educations.map((education) => {
      return (
        <Education
          eduProps={education}
          key={education.id}
          handleEduChange={this.handleEduChange}
          deleteForm={this.deleteForm}
          formId={education.id}
        />
      );
    });
  };
  deleteForm = (e) => {
    // console.log(e.target.id);
    e.preventDefault();
    const filteredEducations = this.state.educations.filter((education) => {
      return parseInt(education.id) !== parseInt(e.target.id);
    });
    this.setState({
      educations: [...filteredEducations],
    });
  };
  render() {
    return (
      <div className="pageContainer">
        <div className="contentWrapper">
          <h1>CV builder</h1>
          <section className="personalInfo">
            <Personal
              personalInfo={this.state.personalInfo}
              handleChange={this.handleChange}
            />
          </section>

          <h3>Education</h3>
          <section className="educationInfo">{this.addEduform()}</section>
          <button className="eduBtn" onClick={this.addEducation}>
            Add Education
          </button>

          <h3>Work Experience</h3>
          <section className="workInfo">
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
          <footer>Made by Dean</footer>
        </div>
      </div>
    );
  }
}
