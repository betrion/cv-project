import React, { Component } from "react";

export default class PreviewCV extends Component {
  render() {
    console.log(this.props.props.workExperiences);
    const renderWork = this.props.props.workExperiences.map((work) => {
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
    const renderEducation = this.props.props.educations.map((education) => {
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
        <h1>{this.props.props.personalInfo.fullName}</h1>
        <h3>{this.props.props.personalInfo.profession}</h3>
        <h4>{this.props.props.personalInfo.email}</h4>
        <h4>{this.props.props.personalInfo.phone}</h4>
        <div className="line"></div>
        <h2>Work Experience</h2>
        <ul>{renderWork}</ul>
        <div className="line"></div>
        <h2>Education</h2>
        <ul>{renderEducation}</ul>
      </div>
    );
  }
}
