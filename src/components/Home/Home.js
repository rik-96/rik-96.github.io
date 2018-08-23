import React from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


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
            
          <nav className="dt w-100 navbar1" >
            {this.props.signedIn
            ?<div >
              <span 
              className="fr menuItems2 pointer"
              onClick={ () => this.props.dispMenu('signupform')}>
                <FontAwesomeIcon
                  icon="cart-arrow-down"
                />
              </span>
              <span 
              className="fr menuItems2 pointer"
              onClick={() => this.props.changeAccess(false)}>
                Logout
              </span>
            </div>
            :<div >
              <span
              className="fr menuItemMobile pointer"
              onClick={ () => this.props.dispMenu('signinform')}>
                <FontAwesomeIcon
                  icon="bars"
                />
              </span>
              <span 
              className="fr menuItems2 pointer"
              onClick={ () => this.props.dispMenu('signinform')}>
                <FontAwesomeIcon
                  icon="cart-arrow-down"
                />
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