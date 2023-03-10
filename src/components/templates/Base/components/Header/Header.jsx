import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ModeToggle from "./ModeToggle";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "#05998c" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            NOME DO SISTEMA
          </Typography>
          <Button
            id="demo-positioned-button"
            aria-controls={open ? "demo-positioned-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            color="inherit"
          >
            Rotas
          </Button>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <MenuItem onClick={handleClose}>
              <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                Home
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link
                to="/change-password"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Trocar Senha
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link
                to="/create-user-manually"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Criar Usuário Manualmente
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link
                to="/insert-user"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Inserir Usuário
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link
                to="/my-library"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Minha Biblioteca
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link
                to="/update-email"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Alterar E-mail
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link
                to="/user-query"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Consultar Usuário
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
          <ModeToggle /*check={DarkMode} change={() => setDarkmode(!darkMode)}*/
          />
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
