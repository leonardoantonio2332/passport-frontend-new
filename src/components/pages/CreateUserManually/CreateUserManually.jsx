import * as React from 'react';
import RegistrationForm from '../CreateUserManually/Components/RegistrationForm/RegistrationForm'

function CreateUserManually() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center',  minHeight: '100vh' }}>
        <RegistrationForm/>
      </div>
    );
  }
  
  export default CreateUserManually;