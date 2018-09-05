import React from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Home extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        signInEmail: '',
        signInPassword: '',
        menuDrop: false,
        togg: false
      }
    }

    toggleMenuDrop = () => {
      this.setState({menuDrop: !(this.state.menuDrop)});
    }

    render(){
      const {togg} = this.state
      return (
        <div>
            
          <nav className="dt w-100 navbar1" >
            {this.props.signedIn
            ?<div >
              <span
              className="fr menuItemMobile pointer"
              onClick={ () => this.toggleMenuDrop()}>
                <FontAwesomeIcon
                  icon="bars"
                />
              </span>
              <span 
              className="fr menuItems2 pointer cartIcon"
              onClick={ () => this.props.dispMenu('signinform')}>
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
              onClick={ () => this.toggleMenuDrop()}>
                <FontAwesomeIcon
                  icon="bars"
                />
              </span>
              <span 
              className="fr menuItems2 pointer cartIcon"
              onClick={ () => this.props.dispMenu('signinform')}>
                <FontAwesomeIcon
                  icon="cart-arrow-down" size="2x"
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
              <a 
              onClick={ () => this.props.dispMenu('homepage')}
              href="#"><strong>
                Motormarch&eacute;
              </strong></a>
            </span>
            <span className="menuItems">
              <span className="categories pointer td v-mid"
              onClick={ () => this.props.dispMenu('homepage')}>
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
          { this.state.menuDrop
            ? 
            this.props.signedIn
            ?<div >
              <div 
              className="pointer menuDropItems cartIcon"
              onClick={ () => this.props.dispMenu('signupform')}>
                <FontAwesomeIcon
                  icon="cart-arrow-down"
                />
              </div>
              <div 
              className="pointer menuDropItems"
              onClick={() => this.props.changeAccess(false)}>
                Logout
              </div>
            </div>
            :<div >
              <div 
              className="pointer menuDropItems cartIcon"
              onClick={ () => this.props.dispMenu('signinform')}>
                <FontAwesomeIcon
                  icon="cart-arrow-down"
                />
              </div>
              <div 
              className="pointer menuDropItems"
              onClick={ () => this.props.dispMenu('signupform')}>
                Signup
              </div>
              <div 
              className="pointer menuDropItems"
              onClick={ () => this.props.dispMenu('signinform')}>
                Login
              </div>
              </div>
            : ''
          }
        </div>
      )
    }
}

export default Home;