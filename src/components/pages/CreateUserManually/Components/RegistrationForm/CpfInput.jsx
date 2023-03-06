import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function cpfInput(){
  return(
    <div>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField 
          id="outlined-basic" 
          label="CPF" 
          variant="outlined" 
          required
          style={{
            width: '50vw'
          }}
        />
    </Box>
    </div>
  )
}

export default cpfInput;
