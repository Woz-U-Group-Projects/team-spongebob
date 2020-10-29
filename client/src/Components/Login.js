import React from 'react';
import ReactDOM from 'react-dom';

class LoginForm extends React.Component {
    render() {
        return (

<h1>Welcome Back!</h1>
<form className="Login form"></form>
  <div className="field"></div>
    <label>Enter Email</label>
    <input type="text" name="email" placeholder="Email"></input>

  <div className="field"></div>
    <label>Password</label>
    <input type="text" name="password" placeholder="Password"></input>
  
  <div className="field"></div>
    <div className="ui checkbox"></div>
      <input type="checkbox" tabindex="0" class="hidden">
      <label>Remember Me!</label>
    
  <button className="ui button" type="login">Login</button>
</form>

   );
};
export default; LoginForm;