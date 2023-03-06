import * as React from "react";
import "./styles.css";
import TeachersAccordion from "./components/Accordion/TeachersAccordion";
import EmployeesAccordion from "./components/Accordion/EmployeesAccordion";
import StudentsAccordion from "./components/Accordion/StudentsAccordion";

const Home = () => {
  return (
    <div className="container">
      <h1>ACESSO DIRETO</h1>
      <StudentsAccordion />
      <EmployeesAccordion />
      <TeachersAccordion />
    </div>
  );
};

export default Home;
