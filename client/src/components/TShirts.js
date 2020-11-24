import React from 'react'

// LAYOUT IMPORT
import Layout from '../components/Layout'

//IMAGE ASSETS IMPORT
import Img from '../assets/images/square-image.png'

//TESTING DATA IMPORT
import Items from '../auth/test_Data/Item-Data'


const { brand, size, color, type } = Items



const TShirts = () => {

  //ITEM CARD
  const itemCard = () => (
    <div className="container">
        <div className="ui card">
          <img className="ui medium rounded image" src={Img} alt="img"/>
          <div className="content">
            <h3 className="header">{Items.brand}</h3>
            <div className="meta">
              <span className="date">Size: {Items.size}</span>
            </div>
            <div className="meta">
              <span className="date">{Items.color} {Items.type}</span>
            </div>
          </div>
        </div>
   
    </div>
  )

  return(
    <Layout>
      {itemCard()}
    </Layout>
  )

}


export default TShirts