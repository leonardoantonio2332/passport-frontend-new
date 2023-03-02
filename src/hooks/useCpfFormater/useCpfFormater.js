import { useState } from 'react'

export const useCpfFormater = () => {
  const [cpf, setCpf] = useState('')
  const formatCpf = (value) => setCpf(
    value
      .replace(
        /[A-Za-z]/,
        ''
      ).replace(
        /(\d{3})(\d{3})(\d{3})(\d{2})/,
        "$1.$2.$3-$4"
      )
  )

  return {
    cpf,
    formatCpf
  }
}
