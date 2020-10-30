import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './App'
import Registration from './auth/Registration'


const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={App} />
        <Route path='/registration' component={Registration} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes