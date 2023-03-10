import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TextMaskedInput from "react-text-mask";

const UserQuery = () => {
  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" align="center" sx={{ mb: 2 }}>
            Consultar Usuário
          </Typography>
          <Typography>Digite o CPF no campo abaixo:</Typography>
          <Box
            component="form"
            noValidate
            sx={{
              mt: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <TextMaskedInput
              mask={[
                /\d/,
                /\d/,
                /\d/,
                ".",
                /\d/,
                /\d/,
                /\d/,
                ".",
                /\d/,
                /\d/,
                /\d/,
                "-",
                /\d/,
                /\d/,
              ]}
              placeholder="___.___.___-__"
              guide={false}
              id="identification-number"
              render={(ref, props) => <TextField {...props} inputRef={ref} />}
              sx={{ mb: 2, width: "100%" }}
              label="CPF"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="date-of-birth"
              label="Data de Nascimento"
              type="date"
              sx={{ mb: 2, width: "100%" }}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{ backgroundColor: "#05998c" }}
            >
              Consultar Usuário
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Esqueceu a senha?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Não tem uma conta? Cadastre-se"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>

      <Container
        component="main"
        maxWidth="xs"
        sx={{
          marginTop: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#FFE4E1",
        }}
      ></Container>
    </>
  );
};

export default UserQuery;
