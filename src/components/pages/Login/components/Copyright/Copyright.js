import React from "react";
import { Typography, Link } from "@mui/material";
import PropTypes from 'prop-types';

const Copyright = ({ sx }) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      sx={sx}
    >
      Copyright ©
      <Link
        color="inherit"
        href="https://www.unifteconline.com.br/"
        target="_blank"
      >
        Uniftec
      </Link>
      {new Date().getFullYear()}.
    </Typography>
  )
}

Copyright.propTypes = {
  sx: PropTypes.object
}

export default Copyright
