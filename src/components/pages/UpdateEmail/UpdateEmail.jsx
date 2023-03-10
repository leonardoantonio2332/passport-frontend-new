import { useState } from "react";
import TextMaskedInput from "react-text-mask";
import {
  Box,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  Button,
  Snackbar,
  Alert,
  Typography,
  Container,
} from "@mui/material";

const UpdateEmail = () => {
  const [identificationType, setIdentificationType] = useState("cpf");
  const [email, setEmail] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleIdentificationTypeChange = (event) => {
    setIdentificationType(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email.includes("@")) {
      setOpenSnackbar(false);
    } else {
      setOpenSnackbar(true);
    }
  };

  const IdentificationNumberField =
    identificationType === "cpf" ? (
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
      />
    ) : (
      <TextMaskedInput
        mask={[/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]}
        guide={false}
        id="identification-number"
        render={(ref, props) => <TextField {...props} inputRef={ref} />}
      />
    );

  return (
    <div style={{ textAlign: "center" }}>
      <Container>
        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" align="center" sx={{ mb: 2 }}>
            Alteração de Email Pessoal
          </Typography>
          <p>
            Digite o {identificationType === "cpf" ? "CPF" : "CI"} da pessoa no
            campo abaixo e em seguida o e-mail a ser atualizado:
          </p>
          <Box
            component="form"
            onSubmit={handleSubmit} // adiciona a função de envio do formulário
            sx={{
              "& .MuiTextField-root": { m: 1, width: "30%" },
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
            noValidate
            autoComplete="off"
          >
            <FormControl component="fieldset">
              <FormLabel component="legend">Tipo de identificação</FormLabel>
              <RadioGroup
                row
                aria-label="identificationType"
                name="row-radio-buttons-group"
                value={identificationType}
                onChange={handleIdentificationTypeChange}
              >
                <FormControlLabel value="cpf" control={<Radio />} label="CPF" />
                <FormControlLabel value="ci" control={<Radio />} label="CI" />
              </RadioGroup>
            </FormControl>
            {IdentificationNumberField}
            <TextField
              required
              id="email"
              label="E-mail"
              sx={{ marginBottom: 1 }}
              value={email}
              fullWidth
              onChange={handleEmailChange}
            />
            <Button
              variant="contained"
              style={{ backgroundColor: "#05998c" }}
              type="submit"
            >
              Atualizar
            </Button>
          </Box>
          <Snackbar
            open={openSnackbar}
            autoHideDuration={6000}
            onClose={handleCloseSnackbar}
          >
            <Alert
              onClose={handleCloseSnackbar}
              severity="error"
              sx={{ width: "100%" }}
            >
              O E-mail é Inválido!
            </Alert>
          </Snackbar>
        </Box>
      </Container>
    </div>
  );
};

export default UpdateEmail;
