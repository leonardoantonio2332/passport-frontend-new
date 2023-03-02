import React, { useEffect } from 'react'
import { useCepFetcher } from 'services'
import { useAddress } from 'contexts'

const CepInput = () => {
  const { setAddress } = useAddress()
  const {
    cep,
    setCep,
    addressData,
    handleQueryCep
  } = useCepFetcher()

  useEffect(() => {
    setAddress(addressData)
  }, [addressData])

  return (
    <div>
      <input
        maxLength={8}
        placeholder="Digite seu cep"
        onChange={(e) => setCep(e.target.value)}
        value={cep}
      />
      <button onClick={handleQueryCep}>Consultar</button>
    </div>
  )
}

export default CepInput
