import React from 'react'
import { Link } from 'react-router-dom'

import MyClosetCards from './MyClosetCards'
import './MyClosetCollection.css' 

import Tshirts from '../assets/images/T-shirts.png';
import Blouse from '../assets/images/Blouse.png';
import Jackets from '../assets/images/Jackets.png';
import Jeans from '../assets/images/Jeans.png';
import JoggerPants from '../assets/images/Jogger Pants.png';
import Shorts from '../assets/images/Shorts.png';
import Heels from '../assets/images/Heels.png';
import Boots from '../assets/images/Boots.png';
import Sneakers from '../assets/images/Sneakers.png';
import HatsAndBags from '../assets/images/HatsAndBags.png';
import Watches from '../assets/images/Watches.png';
import Rings from '../assets/images/Rings.png';
import Floral from '../assets/images/Floral.png';
import Skirts from '../assets/images/Skirts.png';
import Cocktail from '../assets/images/Cocktail.png';



const MyClosetCollection = props => {
  return (
    <div className="container-fluid">
      <h3>Shirts &gt;</h3>
      <div className="row">
        <div className="col-md-3">
          <Link to="/tshirts" >
            <MyClosetCards imgsrc={Tshirts}
            type="T-Shirts"
            numItems="101 Items"
           /></Link>
        </div>
        <div className="col-md-3">
          <MyClosetCards imgsrc={Blouse}
          type="Blouse"
          numItems="30 Items"
           />
        </div>
        <div className="col-md-3">
          <MyClosetCards imgsrc={Jackets}
            type="Jackets"
            numItems="11 Items"
           />
        </div>
      </div>
      <h3>Pants &gt;</h3>
      <div className="row">
        <div className="col-md-3">
          <MyClosetCards imgsrc={Jeans}
            type="Jeans"
            numItems="10 Items"
           />
        </div>
        <div className="col-md-3">
          <MyClosetCards imgsrc={JoggerPants}
            type="Joggers"
            numItems="10 Items"
         />
        </div>
        <div className="col-md-3">
          <MyClosetCards imgsrc={Shorts}
            type="Shorts"
            numItems="15 Items"
          />
        </div>
      </div>
      <h3>Shoes &gt;</h3>
      <div className="row">
        <div className="col-md-3">
          <MyClosetCards imgsrc={Heels}
            type="Heels"
            numItems="20 Items"
           />
        </div>
        <div className="col-md-3">
          <MyClosetCards imgsrc={Boots}
            type="Boots"
            numItems="20 Items"
          />
        </div>
        <div className="col-md-3">
          <MyClosetCards imgsrc={Sneakers} 
            type="Sneakers"
            numItems="20 Items"
          />
        </div>
      </div>
      <h3>Accessories &gt;</h3>
      <div className="row">
        <div className="col-md-3">
          <MyClosetCards imgsrc={HatsAndBags}
            type="Hats & Bags"
            numItems="20 Items"
           />
        </div>
        <div className="col-md-3">
          <MyClosetCards imgsrc={Watches} 
            type="Watches"
            numItems="20 Items"
            />
        </div>
        <div className="col-md-3">
          <MyClosetCards imgsrc={Rings} 
            type="Rings"
            numItems="20 Items"
            />
        </div>
      </div>
      <h3>Dresses & Skirts &gt;</h3>
      <div className="row">
        <div className="col-md-3">
          <MyClosetCards imgsrc={Floral}
            type="Floral"
            numItems="20 Items"
           />
        </div>
        <div className="col-md-3">
          <MyClosetCards imgsrc={Skirts} 
            type="Skirts"
            numItems="20 Items"
            />
        </div>
        <div className="col-md-3">
          <MyClosetCards imgsrc={Cocktail} 
            type="Cocktail"
            numItems="20 Items"
            />
        </div>
      </div>
    </div>
  )
}


export default MyClosetCollection