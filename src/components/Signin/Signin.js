import React from 'react';
import './Signin.css';

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: ''
    }
  }

  onEmailChange = (event) =>{
    this.setState({signInEmail: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }

  onSubmitSignIn = (event) => {
    event.preventDefault();
    this.props.dispMenu('progress');
    fetch("https://gentle-tor-25032.herokuapp.com/signin", {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
    .then(res => res.json())
    .then(user => {
      if (user.id){
        this.props.loadUser('homepage');
        this.props.changeAccess(true);
      } else {
        alert("Invalid Credentials");
        this.props.dispMenu('signinform');
      }
    })
  }

  render(){
    return (
        <main className="pa4 pv6-ns bg-login">
          <div className="measure center bg-white">
            <fieldset className="ba ph0 mh0 pv5-ns">
              <div className=" pb3 pb4-ns signinTitle">Sign In</div>
              <div className="mt3-ns">
                <label className="db f7 lh-copy f6-ns" htmlFor="email-address">Email</label>
                <input className="pa2 ba b--black-70 input-reset measure" 
                type="email" 
                name="email-address"  
                id="email-address" 
                onChange={this.onEmailChange}
                />
              </div>
              <div className="mv3">
                <label className="db f7 lh-copy f6-ns" htmlFor="password">Password</label>
                <input 
                className="pa2 ba b--black-70 input-reset measure" 
                type="password" 
                name="password"  
                id="password" 
                onChange={this.onPasswordChange}
                />
              </div>
            <div className="">
              <input 
              className="ph3 pv2 input-reset grow pointer f7 f6-ns dib signinButton" 
              type="submit" 
              value="Sign in"
              onClick={this.onSubmitSignIn} 
              />
            </div>
            <div className="lh-copy mt3">
              <a href="#0" className="f7 f6-ns link dim black-80 db">Sign up</a>
              <a href="#0" className="f7 f6-ns link black-80 dim db">Forgot your password?</a>
            </div>
            <div className="pv2 pv3-ns">
              <input 
              className="white ph3 pv2 input-reset ba b--black-80 bg-black-80 grow pointer f7 f6-ns dib" 
              type="submit" 
              value="Click here to login as seller"
              />
            </div>
          </fieldset>
          </div>
        </main>
      )
  }
}

export default Signin;