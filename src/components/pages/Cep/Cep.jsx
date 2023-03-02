import React from 'react'
import { AddressProvider } from 'contexts'
import { CepElements } from './components'

const Cep = () => {
  return (
    <AddressProvider>
      <CepElements />
    </AddressProvider>
  )
}

export default Cep
