import React, { Fragment } from 'react'
import { isAuth } from '../auth/helpers'

//Imoort CSS
import './UserProfile.css'


const UserProfile = () => {
  return (
    <Fragment>
    <div className="row gutters-sm">
      <div className="col-md-4 mb-3">
       <div className="card">
        <div className="card-body">
         <div className="d-flex flex-column align-items-center text-center">
           <div className="ui small image">
             <img src="https://via.placeholder.com/150.png" alt="user" />
             <div className="mt-3">
               <h4>{isAuth().name}</h4>
               <p className="text-secondary mb-1">Job Description</p>
               <p className="text-muted font-size-sm">Maybe an address</p>
               <button className="medium ui button">Edit</button>
             </div>
           </div>
         </div>
        </div>
       </div>
      </div>
    </div>
  </Fragment>
  )
  
}

export default UserProfile