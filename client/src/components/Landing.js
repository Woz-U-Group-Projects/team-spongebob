import React from "react";


const Landing = () => {
  
  return (
    <>
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
    </div>
    <div className="container">
      <div className="row">
        <div className="col-sm"></div>
        <div className="col-sm"></div>
      </div>
    </div>

    </>
  );

}
export default Landing;