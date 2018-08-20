import React from 'react';
import './Home.css';

class Home extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        signInEmail: '',
        signInPassword: ''
      }
    }

    render(){
      return (
        <div>
            {this.props.signedIn
            ?<div className="menuItems2bg">
              <span 
              className="fr menuItems2 pointer">
                Cart
              </span>
              <span 
              className="fr menuItems2 pointer"
              onClick={() => this.props.changeAccess(false)}>
                Logout
              </span>
            </div>
            :<div className="menuItems2bg">
              <span 
              className="fr menuItems2 pointer">
                Cart
              </span>
              <span 
              className="fr menuItems2 pointer"
              onClick={ () => this.props.dispMenu('signupform')}>
                Signup
              </span>
              <span 
              className="fr menuItems2 pointer"
              onClick={ () => this.props.dispMenu('signinform')}>
                Login
              </span>
            </div>
          }
          <nav className="dt w-100 navbar1" >
            <span className="brandName pointer">
              <strong>
                Motormarch&eacute;
              </strong>
            </span>
            <span className="menuItems">
              <span className="categories pointer td v-mid"
              onClick={ () => this.props.dispMenu('home')}>
                Home
              </span>
              <span className="categories pointer td v-mid" 
              onClick={ () => this.props.dispMenu('store')}>
                Store
              </span>
              <span className="categories pointer td v-mid" 
              onClick={ () => this.props.dispMenu('services')}>
                Services
              </span>
            </span>
          </nav>
        </div>
      )
    }
}

export default Home;