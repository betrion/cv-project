import React from "react";

const Personal = (props) => {
  return (
    <>
      <h3>Personal Information</h3>
      <form className="personalForm">
        <label htmlFor="fullName">Full Name: </label>
        <input
          className="fullName"
          id="fullName"
          name="fullName"
          value={props.personalInfo.fullName}
          onChange={props.handleChange}
        ></input>
        <label htmlFor="proffession">Profession:</label>
        <input
          className="prof"
          id="profession"
          name="profession"
          value={props.personalInfo.profession}
          onChange={props.handleChange}
        ></input>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={props.personalInfo.email}
          onChange={props.handleChange}
        ></input>
        <label htmlFor="phone">Phone Number:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={props.personalInfo.phone}
          onChange={props.handleChange}
        ></input>
      </form>
    </>
  );
};

export default Personal;
