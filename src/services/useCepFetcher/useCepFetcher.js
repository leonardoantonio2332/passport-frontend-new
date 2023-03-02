import { useState } from 'react'
import axios from 'axios'

export const useCepFetcher = () => {
  const [ cep, setCep ] = useState('')
  const [ addressData, setAddressData ] = useState({})
  const handleQueryCep = () => {
    axios
      .get(`/${cep}/json`)
      .then((res) => {
        setAddressData(res.data)
      })
  }

  return {
    cep,
    setCep,
    addressData,
    handleQueryCep
  }
}
