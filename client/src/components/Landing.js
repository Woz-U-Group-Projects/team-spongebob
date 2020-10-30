import React from "react";
import LoginForm from "./Login";


const Landing = () => {
  
  return (
    <div className="pusher">
      <div className="ui vertical masthead center aligned segment">
        <div className="ui container">
          <div className="ui text container">
            <h1 className="ui header">
              Landing page
            </h1>
            <h2>About the application</h2>
            <LoginForm/>
          </div>
        </div>
      </div>
    </div>
   
  );

}
export default Landing;