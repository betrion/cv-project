import React from "react";

export default class Personal extends React.Component {
  //   const [values, setValues] = React.useState(persInfo);
  //   const handleChange = (e) => {
  //     setValues({ ...values, [e.target.name]: e.target.value });
  //   };
  render() {
    return (
      <>
        <h3>Personal Information</h3>
        <form className="personalForm">
          <label htmlFor="fullName">Full Name: </label>
          <input
            className="fullName"
            id="fullName"
            name="fullName"
            value={this.props.personalInfo.fullName}
            onChange={this.props.handleChange}
          ></input>
          <label htmlFor="proffession">Profession:</label>
          <input
            className="prof"
            id="profession"
            name="profession"
            value={this.props.personalInfo.profession}
            onChange={this.props.handleChange}
          ></input>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={this.props.personalInfo.email}
            onChange={this.props.handleChange}
          ></input>
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={this.props.personalInfo.phone}
            onChange={this.props.handleChange}
          ></input>
        </form>
      </>
    );
  }
}
