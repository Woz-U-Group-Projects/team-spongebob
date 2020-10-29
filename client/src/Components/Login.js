import React from 'react';


const LoginForm = ()=>{
  return(

  <div>
    <h1>Welcome Back!</h1>
    <form className="Login form">
  <div className="field"></div>
    <label>Enter Email</label>
    <input type="text" name="email" placeholder="Email"></input>

  <div className="field"></div>
    <label>Password</label>
    <input type="text" name="password" placeholder="Password"></input>
  
  <div className="field"></div>
    <div className="ui checkbox"></div>
      <input type="checkbox" tabindex="0" class="hidden"></input>
      <label>Remember Me!</label>
    
  <button className="ui button" type="login">Login</button>
</form>
</div>

  )
};
export default LoginForm; 