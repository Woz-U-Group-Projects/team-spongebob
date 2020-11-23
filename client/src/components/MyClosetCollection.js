import React from 'react'
import { Link } from 'react-router-dom'

import MyClosetCards from './MyClosetCards'


const MyClosetCollection = props => {
  return (
    <div className="container-fluid">
      <h3>Shirts</h3>
      <div className="row">
        <div className="col-3">
          <Link to="/tshirts" ><MyClosetCards
            type="T-Shirts"
            numItems="101 Items"
           /></Link>
        </div>
        <div className="col-3">
          <MyClosetCards
          type="Blouse"
          numItems="30 Items"
           />
        </div>
        <div className="col-3">
          <MyClosetCards
            type="Jackets"
            numItems="11 Items"
           />
        </div>
        <div className="col-3">
          <MyClosetCards 
            type="Vests"
            numItems="20 Items"
          />
        </div>
      </div>
      <h3>Pants</h3>
      <div className="row">
        <div className="col-3">
          <MyClosetCards
            type="Jeans"
            numItems="10 Items"
           />
        </div>
        <div className="col-3">
          <MyClosetCards
            type="Joggers"
            numItems="10 Items"
         />
        </div>
        <div className="col-3">
          <MyClosetCards
            type="Shorts"
            numItems="15 Items"
          />
        </div>
        <div className="col-3">
          <MyClosetCards
            type="Spandex"
            numItems="26 Items"
          />
        </div>
      </div>
      <h3>Shoes</h3>
      <div className="row">
        <div className="col-3">
          <MyClosetCards
            type="Running"
            numItems="20 Items"
           />
        </div>
        <div className="col-3">
          <MyClosetCards />
        </div>
        <div className="col-3">
          <MyClosetCards />
        </div>
        <div className="col-3">
          <MyClosetCards />
        </div>
      </div>
      <h3>Accessories</h3>
      <div className="row">
        <div className="col-3">
          <MyClosetCards
            type="T-Shirts"
           />
        </div>
        <div className="col-3">
          <MyClosetCards />
        </div>
        <div className="col-3">
          <MyClosetCards />
        </div>
        <div className="col-3">
          <MyClosetCards />
        </div>
      </div>
      <h3>Dresses/ Skirts</h3>
      <div className="row">
        <div className="col-3">
          <MyClosetCards
            type="T-Shirts"
           />
        </div>
        <div className="col-3">
          <MyClosetCards />
        </div>
        <div className="col-3">
          <MyClosetCards />
        </div>
        <div className="col-3">
          <MyClosetCards />
        </div>
      </div>
    </div>
  )
}


export default MyClosetCollection