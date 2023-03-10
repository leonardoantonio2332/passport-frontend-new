import React from "react";
import "./styles.css";
import Button from "@mui/material/Button";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1 className="title">404</h1>
      <p className="subtitle">Página Não Encontrada</p>
      <Button
        href="/"
        type="submit"
        variant="contained"
        sx={{
          mt: 3,
          mb: 2,
        }}
        size="medium"
        style={{ backgroundColor: "#05998c" }}
      >
        Voltar para a página inicial
      </Button>
    </div>
  );
};

export default NotFound;
