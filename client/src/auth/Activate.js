import React, { useState, useEffect } from 'react'
//import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import jwt from 'jsonwebtoken'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

//IMPORT COMPONENTS
import Layout from '../components/Layout'


const Activate = ({match}) => {

  const [values, setValues] = useState({
    name: '',
    token: '',
    show: true
  })

  useEffect(() => {
    let token = match.params.token  // GETS TOKEN
    let {name} = jwt.decode(token)  // DECODE TOKEN 

    if(token) {
      setValues({...values, name, token})
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const { name, token } = values


  const clickSubmit = e => {
    e.preventDefault();
    axios({
      method: 'POST',
      url: 'http://localhost:8000/api/account-activation',
      data: { token }
    })
      .then(response => {
        console.log('ACTIVATION SUCCESS', response);
        //SAVE RESPONSE (user, token) localstorage/cookie
        setValues({ ...values, show: false });
        toast.success(`Welcome ${response.data.user.name}`);
      })
      .catch(error => {
        console.log('ACTIVATION ERROR', error.response.data.error)
        toast.error(error.response.data.error)
      });
};

const activationLink = () => (
  <div>
    <h1> Hey {name}, Activate your account</h1>
    <div className="ui fluid large submit button" onClick={clickSubmit}>Activate Account</div>
  </div>
)

//CREATE A VISUAL TO DISPLAY ACTIVATION

  return (
    <Layout>
      <ToastContainer />
       {activationLink()}
      
    </Layout>
  )
}


export default Activate