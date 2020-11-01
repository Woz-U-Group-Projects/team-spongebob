import React, { Fragment } from 'react'
import { Link, withRouter } from 'react-router-dom'

const Layout = ({children, match}) => {

  const isActive = path => {
    if(match.path === path) {
      return {borderBottom: 'solid 2px #000'}
    } else {
      return {}
    }
  }

  const nav = () => (
    <div className="ui secondary pointing menu">
      <div className="right menu">
        <Link to="/" className="ui item" style={isActive('/')}>
          Home
        </Link>
        <Link to="/login" className="ui item" style={isActive('/login')}>
          Login
        </Link>
        <Link to="/shop" className="ui item" style={isActive('/shop')}>
          Shop
        </Link>
        <Link to="/mycloset" className="ui item" style={isActive('/mycloset')}>
          MyCloset
        </Link>
        <Link to="/registration" className="ui item" style={isActive('/registration')}>
          Register
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

export default withRouter(Layout)

