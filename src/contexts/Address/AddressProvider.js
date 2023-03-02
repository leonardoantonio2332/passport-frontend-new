import React, { useState } from "react"
import PropTypes from 'prop-types'
import AddressContext from "./AddressContext"

const AddressProvider = ({ children, ...props }) => {
  const [address, setAddress] = useState({})

  const reset = () => {
    setAddress({})
  }

  return (
    <AddressContext.Provider
      value={{
        reset,
        address,
        setAddress,
      }}
      {...props}
    >
      {children}
    </AddressContext.Provider>
  )
}

AddressProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export default AddressProvider
