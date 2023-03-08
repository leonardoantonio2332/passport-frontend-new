import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";

const ChangePassword = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Container maxWidth="sm">
        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" align="center">
            Alterar Senha
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Usuário"
              name="username"
              autoComplete="username"
              autoFocus
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Typography>
              <Box component="span" fontWeight="bold">
                * Dica:
              </Box>{" "}
              A senha deve possuir pelo menos 8 caracteres, letras maiúsculas,
              letras minúsculas, números e caracteres especiais.
            </Typography>
            <Typography>
              <Box component="span" fontWeight="bold">
                * Dica:
              </Box>{" "}
              A senha não pode conter o nome ou sobrenome da pessoa e/ou números
              sequenciais.
            </Typography>
            <Button
              type="submit"
              sx={{ mt: 3, mb: 2 }}
              style={{ backgroundColor: "#05998c" }}
              variant="contained"
            >
              Atualizar
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default ChangePassword;
