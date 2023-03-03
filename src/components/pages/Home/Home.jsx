import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Accordion3 from "./components/Accordion/Accordion3";
import Employees from "./components/Accordion/Employees";

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
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const Home = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <h1>ACESSO DIRETO</h1>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Alunos</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Accordion>
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography>Graduação</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                <ListItem
                  component="a"
                  href="https://ava.uniftec.com.br/moodle-login"
                >
                  <ListItemText primary="Moodle da Graduação" />
                </ListItem>
                <ListItem
                  component="a"
                  href="https://ecampus.ftec.com.br/login"
                >
                  <ListItemText primary="Portal do Aluno da Graduação" />
                </ListItem>
                <ListItem
                  component="a"
                  href="https://ecampus.ftec.com.br/login"
                >
                  <ListItemText primary="Atividades Complementares" />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography>Graduação - EAD</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                <ListItem
                  component="a"
                  href="https://ava.uniftec.com.br/moodle-login"
                >
                  <ListItemText primary="Moodle da Graduação" />
                </ListItem>
                <ListItem
                  component="a"
                  href="https://ecampus.ftec.com.br/login"
                >
                  <ListItemText primary="Portal do Aluno da Graduação" />
                </ListItem>
                <ListItem
                  component="a"
                  href="https://ecampus.ftec.com.br/login"
                >
                  <ListItemText primary="Atividades Complementares" />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography>Pós-Graduação</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                <ListItem
                  component="a"
                  href="https://ava.uniftec.com.br/moodle-login"
                >
                  <ListItemText primary="Moodle da Graduação" />
                </ListItem>
                <ListItem
                  component="a"
                  href="https://ecampus.ftec.com.br/login"
                >
                  <ListItemText primary="Portal do Aluno da Graduação" />
                </ListItem>
                <ListItem
                  component="a"
                  href="https://ecampus.ftec.com.br/login"
                >
                  <ListItemText primary="Atividades Complementares" />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography>Técnicos</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                <ListItem
                  component="a"
                  href="https://ava.uniftec.com.br/moodle-login"
                >
                  <ListItemText primary="Moodle da Graduação" />
                </ListItem>
                <ListItem
                  component="a"
                  href="https://ecampus.ftec.com.br/login"
                >
                  <ListItemText primary="Portal do Aluno da Graduação" />
                </ListItem>
                <ListItem
                  component="a"
                  href="https://ecampus.ftec.com.br/login"
                >
                  <ListItemText primary="Atividades Complementares" />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography>Academy</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                <ListItem
                  component="a"
                  href="https://ava.uniftec.com.br/moodle-login"
                >
                  <ListItemText primary="Moodle da Graduação" />
                </ListItem>
                <ListItem
                  component="a"
                  href="https://ecampus.ftec.com.br/login"
                >
                  <ListItemText primary="Portal do Aluno da Graduação" />
                </ListItem>
                <ListItem
                  component="a"
                  href="https://ecampus.ftec.com.br/login"
                >
                  <ListItemText primary="Atividades Complementares" />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography>Inglês - Livres</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                <ListItem
                  component="a"
                  href="https://ava.uniftec.com.br/moodle-login"
                >
                  <ListItemText primary="Moodle da Graduação" />
                </ListItem>
                <ListItem
                  component="a"
                  href="https://ecampus.ftec.com.br/login"
                >
                  <ListItemText primary="Portal do Aluno da Graduação" />
                </ListItem>
                <ListItem
                  component="a"
                  href="https://ecampus.ftec.com.br/login"
                >
                  <ListItemText primary="Atividades Complementares" />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
        </AccordionDetails>
      </Accordion>
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
      {<Employees /> /*verificar isso aqui */}
      <Accordion3 />
    </div>
  );
};

export default Home;
