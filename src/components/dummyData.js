const dummyData = {
  personalInfo: {
    fullName: "John Smith",
    profession: "Software Developer",
    email: "john.doe@gmail.com",
    phone: "555-333-1822",
  },
  educations: [
    {
      id: Math.round(Math.random() * 10000),
      schoolName: "Berkley High",
      startYear: "2005",
      endYear: "2010",
    },
    {
      id: Math.round(Math.random() * 10000),
      schoolName: "John University",
      startYear: "2011",
      endYear: "2016",
    },
  ],
  workExperiences: [
    {
      id: Math.round(Math.random() * 10000),
      companyName: "Mc'Donalds",
      startYear: "2010",
      endYear: "2012",
      jobRole: "Crew Worker",
    },
    {
      id: Math.round(Math.random() * 10000),
      companyName: "Google",
      startYear: "2013",
      endYear: "2016",
      jobRole: "Google Intern",
    },
    {
      id: Math.round(Math.random() * 10000),
      companyName: "Microsoft",
      startYear: "2017",
      endYear: "2022",
      jobRole: "MULTI BILIONAIRE",
    },
  ],
  editState: true,
};
export default dummyData;
