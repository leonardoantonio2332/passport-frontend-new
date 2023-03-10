import React from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";

const MyLibrary = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Container maxWidth="sm">
        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" align="center" sx={{ mb: 2 }}>
            Minha Biblioteca
          </Typography>
          <Typography variant="h8" align="center">
            Informe o período letivo para exportar todos alunos/professores
            ativos no mesmo (Ftec e Ibgen).
          </Typography>
          <Box component="form" sx={{ mt: 2 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Período Letivo"
            />
            <Button
              type="submit"
              sx={{ mt: 3, mb: 2 }}
              style={{ backgroundColor: "#05998c" }}
              variant="contained"
            >
              Exportar Lista
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default MyLibrary;
