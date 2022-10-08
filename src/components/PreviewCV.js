import React from "react";

const PreviewCV = (props) => {
  const renderWork = props.props.workExperiences.map((work) => {
    return (
      <li key={work.id}>
        <h3>{work.companyName}</h3>
        <p>
          From {work.startYear} to {work.endYear}
        </p>
        <ul>
          <li>{work.jobRole}</li>
        </ul>
      </li>
    );
  });
  const renderEducation = props.props.educations.map((education) => {
    return (
      <li key={education.id}>
        <h3>{education.schoolName}</h3>
        <p>
          From {education.startYear} to {education.endYear}
        </p>
      </li>
    );
  });

  return (
    <div className="previewCV">
      <h1>{props.props.personalInfo.fullName}</h1>
      <h3>{props.props.personalInfo.profession}</h3>
      <h4>{props.props.personalInfo.email}</h4>
      <h4>{props.props.personalInfo.phone}</h4>
      <div className="line"></div>
      <h2>Work Experience</h2>
      <ul>{renderWork}</ul>
      <div className="line"></div>
      <h2>Education</h2>
      <ul>{renderEducation}</ul>
    </div>
  );
};

export default PreviewCV;
