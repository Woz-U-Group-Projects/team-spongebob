import React, { Fragment } from 'react'
import "./Landing.css"

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
    <Fragment>
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel"></div>
        <ol className="carousel-indicators"></ol>
          
        
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        
      <div className="carousel-inner"></div>
        <div className="carousel-item active"></div>
          <img src="..." className="d-block w-100" alt="..."/>
    
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
      <div className="carousel-item">
        <img src="..." className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="..." className="d-block w-100" alt="..."/>
      </div>
      </div>
         
    <div class="container"></div>
    <div class="row">
        <div className="col">One of five columns</div>
        <div className="col">One of five columns</div>
        <div className="col">One of five columns</div>
        <div className="col">One of five columns</div>
        <div className="col">One of five columns</div>
    </div>
<<<<<<< HEAD
    <div class="row">
        <div className="col">One column</div>
    </div>
    <div class="row">
        <div className="col">One of two columns</div>
        <div className="col">Managing Your Own Closet Has Never Been So Simple!</div>
      
=======
    <div className="row footer-container tp">
      <div className=" container text-center">
        <h4>ClosetSpace &#x00AE; All Rights Reserved 2020</h4>
      </div>
>>>>>>> fd7d3e42c3ef99e8eb9a4694cc755ec1f8260c20
    </div>
    <div class="row"></div>
        <div className="col-md-6"></div>
        <div className="col">One of three containers</div><div class="row"></div>
    <h2>NEWSLETTER SIGNUP</h2>
    <div className="col"></div>
      <input type="text" class="form-control" placeholder="First name"></input>
    
    <div className="col"></div>
      <input type="text" class="form-control" placeholder="Last name"></input>
   
    <div className="form-row align-items-center"></div>
                <label for="text"></label>
                <input type="text" class="form-control" id="input4" placeholder="Email Address"></input>
            
            <button class="btn btn-primary">Subscribe</button>
            <p></p>



    

    <div className="container">
     </div>
      <div className="row"></div>
        <div className="col-sm"></div>
        <div className="col-sm"></div>

<div className="col">One of three containers</div>

<button class="ui circular facebook icon button">
<img class="facebook icon"></img>
</button>
<button class="ui circular instagram icon button">
  <img class="instagram icon"></img>
</button>
<button class="ui circular pinterest icon button">
  <img class="pinterest  icon"></img>
</button>

    </Fragment>
  ) 
}
export default Landing;
