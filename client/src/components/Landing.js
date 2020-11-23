import React from "react";


import './Landing.css'

import img from '../assets/images/square-image.png'


const Landing = () => {
  
  return (
    <>
    <div id="carouselExampleIndicators" className="carousel slide tp" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
           <img src="..." className="d-block w-100" alt="..." />
           <div className="carousel-caption d-non d-md-block">
              <h3>First Slide</h3>
              <p>Put something awsome here</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="..." className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="..." className="d-block w-100" alt="..." />
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
            <img src={img} alt="img"></img>
          </div>
        </div>
        <div className="col col-sm">
          <div className="ui small image">
            <img src={img} alt="img"></img>
          </div>
        </div>
        <div className="col col-sm">
          <div className="ui small image">
            <img src={img} alt="img"></img>
          </div>
        </div>
        <div className="col col-sm">
          <div className="ui small image">
            <img src={img} alt="img"></img>
          </div>
        </div>
        <div className="col col-sm">
          <div className="ui small image">
            <img src={img} alt="img"></img>
          </div>
        </div>
      </div>
      <div className="container-fluid text-center tp">
          <h1>YOUR WARDROBE COLLECTION</h1>
        </div>
    </div>
    <div className="container-fluid tp">
      <div className="row">
        <div className="col col-sm">
        <div className="container-fluid">
        <div className="container">
          <p className="display-4"><i className="quote left icon"></i>Easily add clothes to your virtual closet by importing from your gallery.<i className="quote left icon"></i></p>
          <h2 className="display-6">Clothes Freak</h2>
        </div>
      </div>
        </div>
        <div className="col col-sm"></div>
        
      </div>
    </div>
    <div className="container-fluid">
      <div className="row tp">
        <div className="col col-6-sm col-6-md col-sm"></div>
        <div className="col col-6-sm col-6-md col-sm">
          <div className="container-fluid">
            <div className="container">
              <h2 className="display-4">MANAGING YOUR OWN CLOSET HAD NEVER BEEN SO SIMPLE!</h2>
              <p className="lead">Easily add clothes to your virtual closet by importing from your gallery.</p>
            </div>
            <div className="container-fluid  btn-container tp">
              <button type="button" className="huge violet ui button dr-btn">Download</button>
              <button type="button" className="huge violet ui button dr-btn">Register</button>
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
              <li className="nav-item">
                <h3>About Us</h3>
              </li>
              <li className="nav-item">
                <h3>FAQ's</h3>
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
              <i className="instagram icon huge"></i>
            </div>
            <div className="col-4">
              <i className="facebook f icon huge"></i>
            </div>
            <div className="col-4">
              <i className="twitter icon huge"></i>
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