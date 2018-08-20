import React from 'react';

class Signup extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  onNameChange = (event) => {
    this.setState({name: event.target.value});
  }

  onEmailChange = (event) => {
    this.setState({email: event.target.value});
  }

  onPasswordChange = (event) => {
    this.setState({password: event.target.value});
  }

  onSubmitRegister = () => {
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
      }
    })
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