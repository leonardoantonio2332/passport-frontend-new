import React, { useState } from 'react'
import { emailValidator } from 'utils'

const EmailInput = () => {
  const [validEmail, setValidEmail] = useState(true)
  return (
    <div>
      <input
        maxLength={30}
        placeholder="Digite seu Email"
        onBlur={(e) =>
          setValidEmail(
            emailValidator(e.target.value)
          )
        }
      />
      <br />
      {!validEmail && <span>Email Invalido</span>}
    </div>
  )
}

export default EmailInput
