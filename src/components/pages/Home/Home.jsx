import * as React from "react";
import "./styles.css";
import TeachersAccordion from "./components/Accordion/TeachersAccordion";
import EmployeesAccordion from "./components/Accordion/EmployeesAccordion";
import StudentsAccordion from "./components/Accordion/StudentsAccordion";

const Home = () => {
  const [expanded, setExpanded] = React.useState("students");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="container">
      <h1>ACESSO DIRETO</h1>
      <StudentsAccordion
        expanded={expanded === "students"}
        onChange={handleChange("students")}
      />
      <EmployeesAccordion
        expanded={expanded === "employees"}
        onChange={handleChange("employees")}
      />
      <TeachersAccordion
        expanded={expanded === "teachers"}
        onChange={handleChange("teachers")}
      />
    </div>
  );
};

export default Home;
