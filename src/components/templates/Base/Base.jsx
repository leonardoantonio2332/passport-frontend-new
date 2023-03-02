import React from 'react'
import PropTypes from 'prop-types'
import { Footer, Header } from './components'

const Base = ({ page }) => {
  return (
    <div>
      <Header />
      <br />
      {page}
      <br />
      <Footer />
    </div>
  )
}

Base.propTypes = {
  page: PropTypes.node
}

export default Base
