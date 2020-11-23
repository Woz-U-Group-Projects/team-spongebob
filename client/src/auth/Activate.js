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

    <div class="container h-100">
    	<div class="row h-100">
			  <div class="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
					<div class="d-table-cell align-middle">
						<div class="text-center mt-4">
							<h1 class="h2"> {name}, Please Activate Account</h1>
						</div>
						<div class="card">
							<div class="card-body">
								<div class="m-sm-4">
									<form>
                    <div class="form-group">
                    <div class="text-center mt-3">
                    <div className="ui fluid large submit button" onClick={clickSubmit}>Activate Account</div>
                    </div>
                    </div>
									</form>
								</div>
					    </div>
				    </div>
			    </div>
        </div>
      </div>
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