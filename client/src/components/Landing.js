import React from "react";


import './Landing.css'


// IMAGE IMPORT
import img from '../assets/images/square-image.png'
import Upload from '../assets/images/Upload.png'
import Save from '../assets/images/Save.png'
import Plan from '../assets/images/Plan.png'
import Manage from '../assets/images/Manage.png'
import Categorize from '../assets/images/Categorize.png'

import Header1 from '../assets/images/Header-Image 1.png'
import Header2 from '../assets/images/Header-Image 2.png'
import Astronaut from '../assets/images/Astronaut.png'
import Phones_App from '../assets/images/Phones_App.png'
import Instagram from '../assets/images/Instagram.png'
import Facebook from '../assets/images/Facebook.png'
import Pinterest from '../assets/images/Pinterest.png'





const Landing = () => {
  
  return (
    <>
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={Header1} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={Header2} className="d-block w-100" alt="..." />
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="container-fluid text-center tp">
          <h1>FEATURES THAT ALLOW YOU TO ...</h1>
        </div>
        <div className="col col-sm">
          <div className="ui small image">
            <img src={Upload} alt="img"></img>
          </div>
        </div>
        <div className="col col-sm">
          <div className="ui small image">
            <img src={Categorize} alt="img"></img>
          </div>
        </div>
        <div className="col col-sm">
          <div className="ui small image">
            <img src={Save} alt="img"></img>
          </div>
        </div>
        <div className="col col-sm">
          <div className="ui small image">
            <img src={Plan} alt="img"></img>
          </div>
        </div>
        <div className="col col-sm">
          <div className="ui small image">
            <img src={Manage} alt="img"></img>
          </div>
        </div>
      </div>
      <div className="container-fluid text-center tp">
          <h1>YOUR WARDROBE COLLECTION</h1>
        </div>
    </div>
    <div className="container-fluid">
      <div className="row">
        <img src={Astronaut} className="d-block w-100" alt="..." />
      </div>
    </div>
    <div className="container-fluid">
      <div className="row tp">
        <div className="col col-6-sm col-6-md col-sm">
          <div className="container-fluid">
            <div className="container">
              <img src={Phones_App} className="phone-img d-block w-100 img-fluid" alt="..." />
            </div>
          </div>
        </div>
        <div className="col col-6-sm col-6-md col-sm">
          <div className="container-fluid">
            <div className="container mt">
              <h2 className="display-4">MANAGING YOUR OWN CLOSET HAD NEVER BEEN SO SIMPLE!</h2>
              <p className="lead">Easily add clothes to your virtual closet by importing from your gallery.</p>
            </div>
            <div className="container-fluid  btn-container tp">
              <button type="button" className="huge violet ui button dr-btn">Download</button>
              <button type="button" className="huge violet ui button dr-btn" onClick="./registration">Register</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div className="footer-container row">
        <div className="col col-sm">
          <div className="container li-container text-center">
            <ul className="nav flex-column">
              <li className="nav-item">
                <h3>Home</h3>
              </li>
              <li className="nav-item">
                <h3>Login</h3>
              </li>
              <li className="nav-item">
                <h3>Register</h3>
              </li>
            </ul>
          </div>
        </div>
        <div className="col col-6 col-sm tp">
          <div className="ui large form tp">
            <h2 className="ui dividing header text-center">Newsletter Signup</h2>
            <div className="field">
              <div className="two fields">
                <div className="field">
                  <input type="text" name="shipping[first-name]" placeholder="First Name" />
                </div>
                <div className="field">
                  <input type="text" name="shipping[last-name]" placeholder="Last Name" />
                </div>
              </div>
            </div>
            <div className="field">
              <input type="email" placeholder="Email@winning.com" />
            </div>
          </div>
          <div className="container-fluid  btn-container text-center">
            <button type="button" className="huge violet ui button">Subscribe</button>
          </div>
        </div>
        <div className="col col-sm text-center smtp">
          <div className="row icon-container container-fluid">
            <div className="col-4">
              <a href="https://instagram.com">
                <img src={Instagram} alt="instagram" />
              </a>
              
            </div>
            <div className="col-4">
              <a href="https://facebook.com">
                <img src={Facebook} alt="facebook" /> 
              </a>
              
            </div>
            <div className="col-4">
              <a href="https://www.pinterest.com">
                <img src={Pinterest} alt="pinterest"/>
              </a>
              
              </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row footer-container tp">
      <div className=" container text-center">
        <h4>ClosetSpace &#x00AE; All Rights Reserve 2020</h4>
      </div>
    </div>

    </>
  );

}
export default Landing;