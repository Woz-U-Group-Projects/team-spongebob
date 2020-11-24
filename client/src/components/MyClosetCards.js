import React from 'react'

import Skirt from '../assets/images/Skirts.png'

const MyClosetCard = props => {
  return (
    <div className="card">
    
      <div className="card-body">
        <h5 className="card-title">{props.type}</h5>
        <p className="card-text">{props.numItems}</p>
        <img src={Skirt} alt="..."/>
      </div>
    </div>
  )
}


export default MyClosetCard