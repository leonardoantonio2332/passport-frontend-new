import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'components/ux'

const Users = () => {
  const navigate = useNavigate()
  return (
    <div>
      404
      <br />
      <Button
        text="Voltar ao inicio"
        onClick={() => navigate('/')}
      />
    </div>
  )
}

export default Users
