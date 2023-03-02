import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCpfFormater } from 'hooks'
import { EmailInput } from './components'
import { Button } from 'components/ux'

const Users = () => {
  const navigate = useNavigate()
  const { cpf, formatCpf } = useCpfFormater()
  return (
    <div>
      <input
        maxLength={14}
        placeholder="Digite seu cpf"
        onChange={(e) => formatCpf(e.target.value)}
        value={cpf}
      />
      <br />
      <br />
      <EmailInput />
      <br />
      <Button text="Criar Usuario" />
      <br />
      <br />
      <Button
        text="Ir para ceps"
        onClick={() => navigate('/ceps/query')}
      />
    </div>
  )
}

export default Users
