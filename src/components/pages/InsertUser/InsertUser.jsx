import * as React from 'react';
import Button from '@mui/material/Button';
import UnstyledInputBasic from './Components/CustomInput/customInput';

function InsertUser() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center',  minHeight: '100vh' }}>
        <div>
          <div style={{ display: 'flex', fontSize:'20px', justifyContent: 'center', marginBottom: '10px', fontWeight: 'bold' }}>
            Inserir Lista de Usuários - Zeus
          </div>
          <div>
            <UnstyledInputBasic/>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
            <Button variant="contained">Contained</Button>
          </div>
        </div>
      </div>
    );
  }
  
  export default InsertUser;