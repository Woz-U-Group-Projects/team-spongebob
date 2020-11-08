import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import { isAuth } from './helpers'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

//CSS Import
import './Registration.css'


//IMPORT COMPONENTS
import Layout from '../components/Layout'


const Registration = () => {

  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    buttonText: 'Register'
  })

  const {name, email, password, buttonText} = values

  const handleChange = name => e => {
    setValues({...values, [name]: e.target.value})
  }

  const clickSubmit = e => {
    e.preventDefault()
    setValues({ ...values, buttonText: 'Registering' })
    axios({
      method: 'POST',
      url: 'http://localhost:8000/api/registration',
      data: { name, email, password }
    })
      .then(response => {
        console.log('REGISTRATION SUCCESS', response)
        setValues({ ...values, name: '', email: '', password: '', buttonText: 'Registered' })
        toast.success(response.data.message);
      })
      .catch(error => {
        console.log('REGISTRATION ERROR', error.response.data.error)
        setValues({ ...values, buttonText: 'Register' })
        toast.error(error.response.data.error)
      })
};


// REGISTRATION FORM
  const registrationForm = () => (
    
    <div className="ui text container mT">
      <div className="ui middle aligned center aligned grid">
        <div className="column">
          <h2 className="ui header">
          <div className="content">
            Register
          </div>
        </h2>
          <form className="ui large form">
          <div className="ui stacked segment">
            <div className="field">
              <div className="ui left icon input">
                <i className="user icon"></i>
                <input type="text" onChange={handleChange('name')} value={name} placeholder="Name" />
              </div>
            </div>
            <div className="field">
              <div className="ui left icon input">
                <i className="mail icon"></i>
                <input type="email" onChange={handleChange('email')} value={email} placeholder="E-mail address" />
              </div>
            </div>
            <div className="field">
              <div className="ui left icon input">
                <i className="lock icon"></i>
                <input type="password" onChange={handleChange('password')} value={password} placeholder="Password" />
              </div>
            </div>
            <div className="ui fluid large submit button" onClick={clickSubmit}>{buttonText}</div>
          </div>
        </form>
          <div className="ui message">
          Already have an account <Link to="/login">Login</Link>
        </div>
        </div>
      </div>
    </div>
  )

  return (
    <Layout>
      <ToastContainer />
      
      {isAuth() ? <Redirect to='/' /> : null}

       {registrationForm()}
      
    </Layout>
  )
}


export default Registration