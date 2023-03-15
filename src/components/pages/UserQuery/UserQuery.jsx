import axios from "axios";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import * as React from "react";
import Swal from "sweetalert2";
import TextField from "@mui/material/TextField";
import TextMaskedInput from "react-text-mask";
import Typography from "@mui/material/Typography";

const showSuccess = (name) => {
  Swal.fire({
    icon: "success",
    title: `Usuário: ${name}`,
    confirmButtonColor: "#05998c",
  }).then(() => {
    window.location.href = "/user-query";
  });
};

const UserQuery = () => {
  const [user, setUser] = React.useState(null);
  const [error, setError] = React.useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const cpf = event.target.cpf.value;
    const birthDate = event.target.birth_date.value;
    console.log(cpf, birthDate, user); //gambiarra

    axios
      .get(`http://localhost:3001/api/students/${cpf}/${birthDate}`)
      .then((response) => {
        setUser(response.data);
        setError(null);
        if (response.data) {
          showSuccess(response.data.name);
        }
      })
      .catch((error) => {
        console.error(error);
        setUser(null);
        setError("Usuário não encontrado");
      })
      .finally(() => {
        event.target.cpf.value = ""; // limpar o campo CPF
        event.target.birth_date.value = ""; // limpar o campo Data de Nascimento
      });
  };
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
            onSubmit={handleSubmit}
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
              id="cpf"
              name="cpf"
              render={(ref, props) => <TextField {...props} inputRef={ref} />}
              sx={{ mb: 2, width: "100%" }}
              label="CPF"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="birth_date"
              name="birth_date"
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
              sx={{ mt: 2, mb: 2 }}
              style={{ backgroundColor: "#05998c" }}
            >
              Consultar Usuário
            </Button>
            {error && (
              <Typography variant="body1" color="error">
                {error}
              </Typography>
            )}
            <Grid container sx={{ ml: 2 }}>
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
      {/* {user &&
        Swal.fire({
          icon: "success",
          title: `Usuário: ${user.name}`,
        }).then(() => {
          window.location.href = "/user-query";
        })} */}
    </>
  );
};

export default UserQuery;
