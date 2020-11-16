import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './App'

//IMPORT COMPONENTS
import Login from './auth/Login'
import Registration from './auth/Registration'
import Activate from './auth/Activate'
import Private from './components/Private'
import Admin from './components/Admin'
import PrivateRoute from './auth/PrivateRoute'
import AdminRoute from './auth/AdminRoute'
import Mycloset from './components/Mycloset'


const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={App} />
        <Route path='/registration' exact component={Registration} />
        <Route path='/login' exact component={Login} />
        <Route path='/auth/activate/:token' exact component={Activate} />
        <PrivateRoute path='/private' exact component={Private} />
        <PrivateRoute path='/mycloset' exact component={Mycloset} />
        <AdminRoute path='/admin' exact component={Admin} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes