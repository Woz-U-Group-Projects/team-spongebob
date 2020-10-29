import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Layout = ({children}) => {
  const nav = () => (
    <div className="ui secondary pointing menu">
      <div className="right menu">
        <Link className="ui item active">
          Home
        </Link>
        <Link className="ui item">
          Shop
        </Link>
        <Link className="ui item">
          MyCloset
        </Link>
      </div>
    </div>
  )


  return (
    <Fragment>
      {nav()}
      <div className="container">{children}</div>
      
    </Fragment>
  )
}

export default Layout

