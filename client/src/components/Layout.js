import React, { Fragment } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { isAuth, logout } from '../auth/helpers'

const Layout = ({children, match, history}) => {

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
        {!isAuth() && (
          <Fragment>
            <Link to="/" className="ui item" style={isActive('/')}>
              Home
            </Link>
            <Link to="/login" className="ui item" style={isActive('/login')}>
              Login
            </Link>
            <Link to="/registration" className="ui item" style={isActive('/registration')}>
              Register
            </Link>
          </Fragment>
        )}

        {isAuth() && (
          <div className="right menu">
            <Fragment>
              <Link to="/mycloset" className="ui item" style={isActive('/mycloset')}>
                MyCloset
              </Link>

              <li className='ui item' onClick={() => {
                logout(() => {
                  history.push('/')
                })
              }}>logout</li>
            </Fragment>
          </div>
        )}
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


// ADD SHOP LATER
// <Link to="/shop" className="ui item" style={isActive('/shop')}>
// Shop
// </Link>