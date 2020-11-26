import React from 'react';
import './MyClosetCollection.css';

import Skirt from '../assets/images/Skirts.png'

const MyClosetCard = props => {
  return (
<<<<<<< HEAD
    <div className="card">
    
      <div className="card-body">
        <h5 className="card-title">{props.type}</h5>
        <p className="card-text">{props.numItems}</p>
        <img src={Skirt} alt="..."/>
=======
    <div className="card border-light" >
      <div className="overflow">
        <img src={props.imgsrc} alt="T-shirts" className="card-img rounded" />
        <div className="card-body d-inline-block text-justify text-white">
        <div className="card-img-overlay">
          <h5 className="card-title font-weight-bold">{props.type}</h5>
          <p className="card-text">{props.numItems}</p>
        </div>
        </div>
>>>>>>> e1f2f67be98ec8f1fee2fa27fc55fcd4a22501ce
      </div>
    </div>
  )
}

export default MyClosetCard