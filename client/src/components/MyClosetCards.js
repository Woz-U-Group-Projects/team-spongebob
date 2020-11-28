import React from 'react';
import './MyClosetCollection.css';


const MyClosetCard = props => {
  return (
    <div className="card border-light" >
      <div className="overflow">
        <img src={props.imgsrc} alt="T-shirts" className="card-img rounded" />
        <div className="card-body d-inline-block text-justify text-white">
        <div className="card-img-overlay">
          <h5 className="card-title font-weight-bold">{props.type}</h5>
          <p className="card-text">{props.numItems}</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default MyClosetCard