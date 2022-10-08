import "./styles/style.css";
import React, { useState } from "react";
import Personal from "./components/Personal";
import Education from "./components/Education";
import WorkEx from "./components/WorkEx";
import dummyData from "./components/dummyData";
import PreviewCV from "./components/PreviewCV";

const App = () => {
  const [state, setState] = useState({
    personalInfo: {
      fullName: "",
      profession: "",
      email: "",
      phone: "",
    },
    educations: [],
    workExperiences: [],
    editState: true,
  });
  // state =

  const handleChange = (e) => {
    const value = e.target.value;
    setState((prevstate) => ({
      ...prevstate,
      personalInfo: {
        ...prevstate.personalInfo,
        [e.target.name]: value,
      },
    }));
  };
  const toggleModes = () => {
    return setState((prevState) => ({
      ...prevState,
      editState: !prevState.editState,
    }));
  };
  const fillWithDummyData = () => {
    return setState({ ...state, ...dummyData });
  };
  const handleQualificationChange = (e) => {
    // ružno odrađeno, izvuci objekt iz statea, uredi ga i zabij nazad..
    if (e.target.parentElement.className === "eduForm") {
      const eduProp = [...state.educations];
      const eduPropIndex = eduProp.findIndex(
        (eduValue) =>
          parseInt(eduValue.id) === parseInt(e.target.parentElement.id)
      );
      eduProp[eduPropIndex][e.target.name] = e.target.value;
      setState({ ...state, educations: eduProp });
    }
    if (e.target.parentElement.className === "workForm") {
      const workProp = [...state.workExperiences];
      const workPropIndex = workProp.findIndex(
        (workValue) =>
          parseInt(workValue.id) === parseInt(e.target.parentElement.id)
      );
      workProp[workPropIndex][e.target.name] = e.target.value;
      setState({ ...state, workExperiences: workProp });
    }
  };

  function addQualification(targetBtn) {
    if (targetBtn.target.className === "eduBtn") {
      return setState((prevstate) => ({
        ...prevstate,
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
      return setState((prevstate) => ({
        ...prevstate,
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
  }

  const deleteForm = (e) => {
    e.preventDefault();
    const filteredQualifications = state[
      e.target.parentElement.className === "eduForm"
        ? "educations"
        : "workExperiences"
    ].filter((qualification) => {
      return parseInt(qualification.id) !== parseInt(e.target.id);
    });
    if (e.target.parentElement.className === "eduForm") {
      return setState({ ...state, educations: [...filteredQualifications] });
    }
    if (e.target.parentElement.className === "workForm") {
      return setState({
        ...state,
        workExperiences: [...filteredQualifications],
      });
    }
  };

  return (
    <div className="pageContainer">
      <div className="contentWrapper">
        <h1>CV builder</h1>
        <button className="previewToggle" onClick={toggleModes}>
          {state.editState ? "Show CV" : "Edit CV"}
        </button>
        <button className="dummyBtn" onClick={fillWithDummyData}>
          Fill with dummy data
        </button>
        <div className={("previewMode", state.editState ? "hidden" : "")}>
          <PreviewCV props={state} />
        </div>

        <div className={("editMode", state.editState ? "" : "hidden")}>
          <section className="personalInfo">
            <Personal
              personalInfo={state.personalInfo}
              handleChange={handleChange}
            />
          </section>

          <h3>Education</h3>
          <button className="eduBtn" onClick={addQualification}>
            Add Education
          </button>
          <section className="educationInfo">
            {/* {renderForms("educations")} */}
            {state["educations"].map((qualification) => (
              <Education
                eduProps={qualification}
                key={qualification.id}
                handleQualificationChange={handleQualificationChange}
                deleteForm={deleteForm}
                formId={qualification.id}
              />
            ))}
          </section>

          <h3>Work Experience</h3>
          <button className="workBtn" onClick={addQualification}>
            Add Work Experience
          </button>
          <section className="workInfo">
            {state["workExperiences"].map((qualification) => (
              <WorkEx
                workProps={qualification}
                key={qualification.id}
                handleQualificationChange={handleQualificationChange}
                deleteForm={deleteForm}
                formId={qualification.id}
              />
            ))}
          </section>

          <footer>Made by Dean</footer>
        </div>
      </div>
    </div>
  );
};

export default App;
