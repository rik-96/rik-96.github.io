import React from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = ({dispMenu}) => {
    return (
      <div>
        <div className="menuItems2bg">
          <span className="fr menuItems2">Cart</span>
          <span className="fr menuItems2">Signup</span>
          <span className="fr menuItems2">Login</span>
        </div>
        <nav className="dt w-100 navbar" >
          <span className="brandName pointer">
            <strong>
              Motormarch&eacute;
            </strong>
          </span>
          <span className="menuItems">
            <span className="categories pointer td v-mid"
            onClick={ () => dispMenu('home')}>
              Home
            </span>
            <span className="categories pointer td v-mid" 
            onClick={ () => dispMenu('store')}>
              Store
            </span>
            <span className="categories pointer td v-mid" 
            onClick={ () => dispMenu('services')}>
              Services
            </span>
          </span>
        </nav>
      </div>
    )
}

export default Home;