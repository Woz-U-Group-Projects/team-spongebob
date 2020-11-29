import React from 'react'

// LAYOUT IMPORT
import Layout from '../components/Layout'

//IMAGE ASSETS IMPORT
//import Img from '../assets/images/square-image.png'

//TESTING DATA IMPORT
import Items from '../auth/test_Data/Item-Data'

import Nike from '../assets/images/Nike.png';





const TShirts = () => {

  //ITEM CARD
  // const itemCard = () => (
  //   <div className="container-fluid" >
  //     {Items.map((Items, id) => (
  //       <div className="row">
  //       <div className="card-group col-4" >
  //       <div className="row">
  //       <div className="ui card" >
  //         <img className="card-img-top ui medium rounded image" src={Img} alt="img"/>
  //         <div className="content">
  //           <h3 className="header">{Items.brand}</h3>
  //           <div className="meta">
  //             <span className="date">Size: {Items.size}</span>
  //           </div>
  //           <div className="meta">
  //             <span className="date">{Items.color} {Items.type}</span>
  //           </div>
  //         </div>
  //         </div>
  //         </div>
  //       </div>
  //       </div>
  //   ))}
  //   </div>

  // const itemCard = () => (
  //   <div className="container">
  //     {Items.map((Items, id) => (
  //       <div className="ui card">
  //         <img className="ui medium rounded image" src={Img} alt="img"/>
  //         <div className="content">
  //           <h3 className="header">{Items.brand}</h3>
  //           <div className="meta">
  //             <span className="date">Size: {Items.size}</span>
  //           </div>
  //           <div className="meta">
  //             <span className="date">{Items.color} {Items.type}</span>
  //           </div>
  //         </div>
  //       </div>
  //   ))}
  //   </div>

  const itemCard = () => (
    <div className="container-fluid">
      {Items.map((Items, id) => (
        <div className="row">
          <div className="floating-card col-sm-4 col-m-3 col-l-2">
            <img className="ui medium rounded card-img-top" src={Nike} alt={Items.alt}/>
            <div className="content card-body bg-info">
              <h3 className="header text-white text-bold">{Items.brand}</h3>
              <div className="meta">
                <span className="date text-white">Size: {Items.size}</span>
              </div>
              <div className="meta">
                <span className="date text-white">{Items.color} {Items.type}</span>
              </div>
            </div>
          </div>
        </div>
    ))}
    </div>
  )

  return(
    <Layout>
      <div>
      {itemCard()}
      </div>
    </Layout>
  )

}


export default TShirts