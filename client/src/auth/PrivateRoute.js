import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {isAuth} from './helpers'



const PrivateRoute = ({component: Component, ...rest}) => (

  <Route {...rest} render={
    props => isAuth() && isAuth().role === 'subscriber' ? (<Component {...props} />) : (<Redirect to={{
      pathname: '/login',
      state: {from:props.location}
    }}/> )
  }>
    
  </Route>
)


export default PrivateRoute