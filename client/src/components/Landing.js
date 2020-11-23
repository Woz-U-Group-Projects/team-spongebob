import React, { Fragment } from 'react'
import "./Landing.css"

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
        <div className="col-sm"></div>
        <div className="col-sm"></div>
        <div className="col-sm"></div>
        <div className="col-sm"></div>
        <div className="col-sm"></div>
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
    <div class="row">
        <div className="col">One column</div>
    </div>
    <div class="row">
        <div className="col">One of two columns</div>
        <div className="col">One of two columns</div>
    </div>
    <div class="row"></div>
        <div className="col">NEWSLETTER SIGNUP</div>
        <div className="col">One of three columns</div><div class="row"></div>
    <div className="col"></div>
      <input type="text" class="form-control" placeholder="First name"></input>
    
    <div className="col"></div>
      <input type="text" class="form-control" placeholder="Last name"></input>
    <div className="col">One of three columns</div>


    <div className="col"></div>
                <label for="text">Email:</label>
                <input type="text" class="form-control" id="input4" placeholder="example@email.com"></input>
            
            <button class="btn btn-primary">Subscribe</button>



    
    <div className="container">
     </div>
      <div className="row"></div>
        <div className="col-sm"></div>
        <div className="col-sm"></div>

    </Fragment>
  ) 
}
export default Landing;