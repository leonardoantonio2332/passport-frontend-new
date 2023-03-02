import { useEffect } from 'react'
import axios from 'axios'

export const useDefineAxiosConfig = () => {
  useEffect(() => {
    axios.defaults.baseURL = process.env.REACT_APP_API_URL
  })
}
