import "./styles/style.css";
import React from "react";
import Personal from "./components/Personal";
import Education from "./components/Education";
import WorkEx from "./components/WorkEx";
import dummyData from "./components/dummyData";
import PreviewCV from "./components/PreviewCV";

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
      workExperiences: [],
      editState: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.addQualification = this.addQualification.bind(this);
    this.handleQualificationChange = this.handleQualificationChange.bind(this);
    this.renderForms = this.renderForms.bind(this);
    this.deleteForm = this.deleteForm.bind(this);
    this.fillWithDummyData = this.fillWithDummyData.bind(this);
    this.toggleModes = this.toggleModes.bind(this);
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
  toggleModes = () => {
    return this.setState({ editState: !this.state.editState });
  };
  fillWithDummyData = () => {
    return this.setState(dummyData);
  };
  handleQualificationChange = (e) => {
    // ružno odrađeno, izvuci objekt iz statea, uredi ga i zabij nazad..
    if (e.target.parentElement.className === "eduForm") {
      const eduProp = [...this.state.educations];
      const eduPropIndex = eduProp.findIndex(
        (eduValue) =>
          parseInt(eduValue.id) === parseInt(e.target.parentElement.id)
      );
      eduProp[eduPropIndex][e.target.name] = e.target.value;
      this.setState({ educations: eduProp });
    }
    if (e.target.parentElement.className === "workForm") {
      const workProp = [...this.state.workExperiences];
      const workPropIndex = workProp.findIndex(
        (workValue) =>
          parseInt(workValue.id) === parseInt(e.target.parentElement.id)
      );
      workProp[workPropIndex][e.target.name] = e.target.value;
      this.setState({ workExperiences: workProp });
    }
  };

  addQualification = (targetBtn) => {
    if (targetBtn.target.className === "eduBtn") {
      return this.setState((prevstate) => ({
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
    }
    if (targetBtn.target.className === "workBtn") {
      return this.setState((prevstate) => ({
        workExperiences: [
          ...prevstate.workExperiences,
          {
            id: Math.round(Math.random() * 10000),
            companyName: "",
            startYear: "",
            endYear: "",
            jobRole: "",
          },
        ],
      }));
    }
  };

  //Reusable komponenta? xD
  renderForms = (targetForm) => {
    if (targetForm === "educations") {
      return this.state[targetForm].map((qualification) => {
        return (
          <Education
            eduProps={qualification}
            key={qualification.id}
            handleQualificationChange={this.handleQualificationChange}
            deleteForm={this.deleteForm}
            formId={qualification.id}
          />
        );
      });
    }
    if (targetForm === "workExperiences") {
      return this.state[targetForm].map((qualification) => {
        return (
          <WorkEx
            workProps={qualification}
            key={qualification.id}
            handleQualificationChange={this.handleQualificationChange}
            deleteForm={this.deleteForm}
            formId={qualification.id}
          />
        );
      });
    }
  };
  deleteForm = (e) => {
    e.preventDefault();
    const filteredQualifications = this.state[
      e.target.parentElement.className === "eduForm"
        ? "educations"
        : "workExperiences"
    ].filter((qualification) => {
      return parseInt(qualification.id) !== parseInt(e.target.id);
    });
    if (e.target.parentElement.className === "eduForm") {
      return this.setState({
        educations: [...filteredQualifications],
      });
    }
    if (e.target.parentElement.className === "workForm") {
      return this.setState({
        workExperiences: [...filteredQualifications],
      });
    }
  };
  render() {
    return (
      <div className="pageContainer">
        <div className="contentWrapper">
          <h1>CV builder</h1>
          <button className="previewToggle" onClick={this.toggleModes}>
            {this.state.editState ? "Show CV" : "Edit CV"}
          </button>
          <button className="dummyBtn" onClick={this.fillWithDummyData}>
            Fill with dummy data
          </button>
          <div
            className={("previewMode", this.state.editState ? "hidden" : "")}
          >
            <PreviewCV props={this.state} />
          </div>

          <div className={("editMode", this.state.editState ? "" : "hidden")}>
            <section className="personalInfo">
              <Personal
                personalInfo={this.state.personalInfo}
                handleChange={this.handleChange}
              />
            </section>

            <h3>Education</h3>
            <button className="eduBtn" onClick={this.addQualification}>
              Add Education
            </button>
            <section className="educationInfo">
              {this.renderForms("educations")}
            </section>

            <h3>Work Experience</h3>
            <button className="workBtn" onClick={this.addQualification}>
              Add Work Experience
            </button>
            <section className="workInfo">
              {this.renderForms("workExperiences")}
            </section>

            <footer>Made by Dean</footer>
          </div>
        </div>
      </div>
    );
  }
}
