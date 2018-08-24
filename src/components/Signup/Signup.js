import React from 'react';

class Signup extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      errorInName: '',
      errorInEmail: '',
      errorInPassword: ''
    }
  }

  checkInputName = (name) => {
    let error = '';
    if (!name){
      error = "Name can't be empty!";
    }
    if (typeof name !== undefined){
      if (!name.match(/^[a-zA-Z]+$/)){
        error = "Name is not valid";
      }
      else if (!(name.length>3 && name.length<21)){
        error = "Name should contain between 5 and 20 letters";
      }
    }
    this.setState({errorInName: error});
  }

  checkInputEmail = (email) => {
    let error = '';
    if (!email){
      error = "Email can't be empty!";
    }
    if (typeof email !== undefined){
      let at = email.lastIndexOf('@');
      let dot = email.lastIndexOf('.');

      if (!(at > 0 && dot > 2 && at < dot && (email.length - dot) > 2)){
        console.log(email);
        error = "Email is not valid";
      }
    }
    this.setState({errorInEmail: error});
  }

  checkInputPassword = (password) => {
    let error = '';
    if (!password){
      error = "Password can't be empty!";
    }
    this.setState({errorInPassword: error});
  }

  onNameChange = (event) => {
    this.setState({name: event.target.value});
    this.checkInputName(this.state.name);
  }

  onEmailChange = (event) => {
    this.setState({email: event.target.value});
    this.checkInputEmail(this.state.email);
  }

  onPasswordChange = (event) => {
    this.setState({password: event.target.value});
  }



  onSubmitRegister = () => {
    this.checkInputName(this.state.name);
    this.checkInputEmail(this.state.email);
    this.checkInputPassword(this.state.password);
    if (!(this.state.errorInEmail && this.state.errorInName && this.state.errorInPassword)) {
      this.props.dispMenu('progress');
      fetch('https://gentle-tor-25032.herokuapp.com/register', {
        method: 'post',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({
          name: this.state.name,
          email: this.state.email,
          password: this.state.password
        })
      })
      .then(res => res.json())
      .then(user => {
        if (user[0].id){
          this.props.loadUser('home');
          this.props.changeAccess(true);
        } else {
          alert('Invalid Credentials');
          this.props.dispMenu('signupform');
        }
      })
    } else {
      alert("Invalid credentials");
    }
  }

  render(){
    return (
      <article className="pa4 pv6-ns white-80 bg-black-90">
        <div className="f7 f4-ns fw6 pb3 pb4-ns">Sign Up</div>
        <div action="sign-up_submit" method="get" acceptCharset="utf-8">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="ph0 mh0 fw6 clip">Sign Up</legend>
            <div className="mt3">
              <label className="db fw4 lh-copy f6" 
                htmlFor="name">
                Name
              </label>
              <input 
                className="pa2 input-reset ba bg-transparent w-100 measure" 
                type="name" 
                name="name"  
                id="name" 
                onChange={this.onNameChange}
              />
              <div className="red pt1">
                {
                  this.state.errorInName
                }
              </div>
            </div>
            <div className="mt3">
              <label className="db fw4 lh-copy f6" 
                htmlFor="email-address">
                Email address
              </label>
              <input 
                className="pa2 input-reset ba bg-transparent w-100 measure" 
                type="email" 
                name="email-address"  
                id="email-address" 
                onChange={this.onEmailChange}
              />
              <div className="red pt1">
                {
                  this.state.errorInEmail
                }
              </div>
            </div>
            <div className="mt3">
              <label 
                className="db fw4 lh-copy f6" 
                htmlFor="password">
                Password
              </label>
              <input 
                className="b pa2 input-reset ba bg-transparent" 
                type="password" 
                name="password"  
                id="password" 
                onChange={this.onPasswordChange}
              />
              <div className="red pt1">
                {
                  this.state.errorInPassword
                }
              </div>
            </div>
          </fieldset>
          <div 
          className="mt3">
            <input 
              className="b white ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6" 
              type="submit" 
              value="Sign Up" 
              onClick={this.onSubmitRegister}
            />
          </div>
        </div>
      </article>
    )
  }
}

export default Signup;