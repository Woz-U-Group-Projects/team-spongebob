import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import { authenticate, isAuth } from './helpers'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

//IMPORT COMPONENTS
import Layout from '../components/Layout'


const Login = () => {

  const [values, setValues] = useState({
    email: '',
    password: '',
    buttonText: 'Login'
  })

  const {email, password, buttonText} = values

  const handleChange = name => e => {
    setValues({...values, [name]: e.target.value})
  }

  const clickSubmit = e => {
    e.preventDefault();
    setValues({ ...values, buttonText: 'Logging in ...' });
    axios({
      method: 'POST',
      url: 'http://localhost:8000/api/login',
      data: { email, password }
    })
      .then(response => {
        console.log('LOGIN SUCCESS', response);
        //SAVE RESPONSE (user, token) localstorage/cookie
        authenticate(response, () => {
          setValues({ ...values, name: '', email: '', password: '', buttonText: 'Logged In ...' });
          toast.success(`Welcome ${response.data.user.name}`);
        })
      })
      .catch(error => {
        console.log('LOGIN ERROR', error.response.data);
        setValues({ ...values, buttonText: 'Login' });
        toast.error(error.response.data.error);
      });
};


// REGISTRATION FORM
  const loginForm = () => (
    
    <div className="ui text container">
      <div className="ui middle aligned center aligned grid">
        <div className="column">
          <h2 className="ui header">
          <div className="content">
            Login
          </div>
        </h2>
          <form className="ui large form">
          <div className="ui stacked segment">
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
          Don't have an account?  <Link to="/registration">Register</Link>
        </div>
        </div>
      </div>
    </div>
  )

  return (
    <Layout>
      <ToastContainer />
      {isAuth() ? <Redirect to='/' /> : null}
       {loginForm()}
      
    </Layout>
  )
}


export default Login