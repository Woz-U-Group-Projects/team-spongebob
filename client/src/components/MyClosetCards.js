import React from 'react'


const MyClosetCard = props => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.type}</h5>
        <p className="card-text">{props.numItems}</p>
      </div>
    </div>
  )
}


export default MyClosetCard