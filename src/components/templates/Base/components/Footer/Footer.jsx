import React from "react";
import { Box, Typography, Container, Link, CssBaseline } from "@mui/material";

const Copyright = () =>  {
  return (
    <Typography variant="body2" color="text.secondary">
      Copyright ©
      <Link color="inherit" href="https://www.ftec.com.br/">
        Uniftec
      </Link>
      {new Date().getFullYear()}.
    </Typography>
  );
}

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <CssBaseline />
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">Grupo Uniftec</Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
