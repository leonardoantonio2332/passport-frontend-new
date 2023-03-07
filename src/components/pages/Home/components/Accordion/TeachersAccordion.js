import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import GraduationAccordion from "./components/Teachers/GraduationAccordion";
import EadGraduationAccordion from "./components/Teachers/EadGraduationAccordion";
import PostGraduationAccordion from "./components/Teachers/PostGraduationAccordion";
import TechnicalAccordion from "./components/Teachers/TechnicalAccordion";
import AcademyAccordion from "./components/Teachers/AcademyAccordion";
import EnglishAccordion from "./components/Teachers/EnglishAccordion";
import CoPresentIcon from "@mui/icons-material/CoPresent";

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
  width: "100%", // adicionado para ajustar ao tamanho do container
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<CoPresentIcon sx={{ fontSize: "0.8rem" }} />}
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
  width: "100%", // adicionado para ajustar ao tamanho do container
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
  width: "100%", // adicionado para ajustar ao tamanho do container
}));

const TeachersAccordion = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Accordion
      expanded={expanded === "panel3"}
      onChange={handleChange("panel3")}
    >
      <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
        <Typography>Professores</Typography>
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
export default TeachersAccordion;
