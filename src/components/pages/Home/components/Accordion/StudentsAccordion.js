import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import GraduationAccordion from "./components/Students/GraduationAccordion";
import EadGraduationAccordion from "./components/Students/EadGraduationAccordion";
import PostGraduationAccordion from "./components/Students/PostGraduationAccordion";
import TechnicalAccordion from "./components/Students/TechnicalAccordion";
import AcademyAccordion from "./components/Students/AcademyAccordion";
import EnglishAccordion from "./components/Students/EnglishAccordion";
import PeopleIcon from "@mui/icons-material/People";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
  width: "100%", // adicionado para ajustar a largura do conteúdo
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<PeopleIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(360deg)",
    transition: "transform 1s",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
  width: "100%", // adicionado para ajustar a largura do conteúdo
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
  width: "100%", // adicionado para ajustar a largura do conteúdo
}));

const StudentsAccordion = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Accordion
      expanded={expanded === "panel1"}
      onChange={handleChange("panel1")}
    >
      <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <Typography>Alunos</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <GraduationAccordion />
        <EadGraduationAccordion />
        <PostGraduationAccordion />
        <TechnicalAccordion />
        <AcademyAccordion />
        <EnglishAccordion />
      </AccordionDetails>
    </Accordion>
  );
};
export default StudentsAccordion;
