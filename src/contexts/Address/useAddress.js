import { useContext } from "react"
import AddressContext from "./AddressContext"

export const useAddress = () => useContext(AddressContext)
