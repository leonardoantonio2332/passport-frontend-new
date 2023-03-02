import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'components/ux'
import { useAddress } from 'contexts'
import { CepInput } from './components'

const CepElements = () => {
  const navigate = useNavigate()
  const { address, reset } = useAddress()
  return (
    <div>
      <CepInput />
      <br />
      {Object.keys(address).map((i, idx) => (
        <p key={idx}>{i}: {address[`${i}`]}</p>
      ))}
      <Button
        text="Limpar cep"
        onClick={reset}
      />
      <br />
      <br />
      <Button
        text="Ir para usuarios"
        onClick={() => navigate('/users/register')}
      />
    </div>
  )
}

export default CepElements
