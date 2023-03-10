import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import HailIcon from "@mui/icons-material/Hail";

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
    expandIcon={<HailIcon sx={{ fontSize: "0.9rem" }} />}
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
  width: "100%",
  display: "flex",
  flexDirection: "column", // adicionado para ajustar a largura do conteúdo
}));

const EmployeesAccordion = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <Accordion
      expanded={expanded === "panel2"}
      onChange={handleChange("panel2")}
    >
      <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
        <Typography>Funcionários</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <List>
          <ListItem
            component="a"
            href="https://ava.uniftec.com.br/moodle-login"
          >
            <ListItemText primary="UNIC" />
          </ListItem>
          <ListItem component="a" href="https://ecampus.ftec.com.br/login">
            <ListItemText primary="Portal do Funcionário" />
          </ListItem>
          <ListItem component="a" href="https://ecampus.ftec.com.br/login">
            <ListItemText primary="Webmail" />
          </ListItem>
          <ListItem component="a" href="https://ecampus.ftec.com.br/login">
            <ListItemText primary="Office 365 - Acesso" />
          </ListItem>
        </List>
      </AccordionDetails>
    </Accordion>
  );
};

export default EmployeesAccordion;
