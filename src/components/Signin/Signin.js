import React from 'react';

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
        this.props.loadUser('home');
        this.props.changeAccess(true);
      } else {
        alert("Invalid Credentials");
        this.props.dispMenu('signinform');
      }
    })
  }

  render(){
    return (
        <main className="pa4 pv6-ns white-80 bg-black-90">
          <div className="measure center">
            <fieldset id="" className="ba b--transparent ph0 mh0">
              <div className="f7 f4-ns fw6 pb3 pb4-ns">Sign In</div>
              <div className="mt3-ns">
                <label className="db f7 fw6-ns lh-copy f6-ns" htmlFor="email-address">Email</label>
                <input className="pa2 input-reset ba bg-transparent hover-white w-100" 
                type="email" 
                name="email-address"  
                id="email-address" 
                onChange={this.onEmailChange}
                />
              </div>
              <div className="mv3">
                <label className="db f7 fw6-ns lh-copy f6-ns" htmlFor="password">Password</label>
                <input 
                className="b pa2 input-reset ba bg-transparent hover-white w-100" 
                type="password" 
                name="password"  
                id="password" 
                onChange={this.onPasswordChange}
                />
              </div>
            </fieldset>
            <div className="">
              <input 
              className="white ph3 pv2 input-reset ba b--white bg-transparent grow pointer f7 f6-ns dib" 
              type="submit" 
              value="Sign in"
              onClick={this.onSubmitSignIn} 
              />
            </div>
            <div className="lh-copy mt3">
              <a href="#0" className="f7 f6-ns link dim white db">Sign up</a>
              <a href="#0" className="f7 f6-ns link dim white db">Forgot your password?</a>
            </div>
            <div className="pv2 pv3-ns">
              <input 
              className="black ph3 pv2 input-reset ba b--gray bg-gray grow pointer f7 f6-ns dib" 
              type="submit" 
              value="Click here to login as seller"
              />
            </div>
          </div>
        </main>
      )
  }
}

export default Signin;