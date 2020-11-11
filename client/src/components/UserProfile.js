import React, { Fragment } from 'react'
import { isAuth } from '../auth/helpers'

//Imoort CSS
import './UserProfile.css'


const UserProfile = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="page-heading">
          <div className="media clearfix">
            <div className="media-left p30">
              <img src="https://via.placeholder.com/128.png" alt="user" className="img-fluid rounded-circle mb-2"/>
            </div>
            <div className="media-body va-m">
              <h2 className="media-heading">{isAuth().name} <small>- {isAuth().role}</small></h2>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
  
}

export default UserProfile