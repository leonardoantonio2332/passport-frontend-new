import * as React from 'react';
import MultipleSelect from './Components/select';

function AddUserGroup() {
    return (
      <div style={{ display: 'flex', alignItems: 'center', minHeight: '100vh', flexDirection: 'column' }}>
        <div style={{ fontSize:'20px', marginBottom: '10px', fontWeight: 'bold' }}>
          Adicionar grupo ao usuário
        </div>
        <div>
          <MultipleSelect/>
        </div>
        <div>
          <MultipleSelect/>
        </div>
      </div>
    );
  }
  
  export default AddUserGroup;