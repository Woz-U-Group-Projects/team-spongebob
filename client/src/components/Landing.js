import React, { Fragment } from 'react'
import "./Landing.css"

const Landing = () => {

  return (
    <Fragment>
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="..." className="d-block w-100" alt="..."/>
        </div>
      </div>
      <div className="carousel-item">
        <img src="..." className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="..." className="d-block w-100" alt="..."/>
      </div>
      </div>
         
    <div class="container">
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
    <div class="row">
        <div className="col">One of three columns</div>
        <div className="col">One of three columns</div>
        <div className="col">One of three columns</div>
    </div>
    </div>





     

      
      
    </Fragment>
  )
  }
export default Landing;