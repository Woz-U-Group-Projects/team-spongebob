import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './App'

//IMPORT COMPONENTS
import Login from './auth/Login'
import Registration from './auth/Registration'
import Activate from './auth/Activate'


const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={App} />
        <Route path='/registration' exact component={Registration} />
        <Route path='/login' exact component={Login} />
        <Route path='/auth/activate/:token' exact component={Activate} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes