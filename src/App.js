import React, { Component } from 'react';
import './App.css';
import MetaTags from 'react-meta-tags';
import HomePage from './components/HomePage/HomePage';
import Home from './components/Home/Home';
import Progress from './components/Progress/Progress';
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';
import ShopCard from './components/ShopCard/ShopCard';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faBars, faCartArrowDown, faCog, faSearch } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faBars, faCartArrowDown, faCog, faSearch);

class App extends Component {

    constructor(){
        super();
        this.state = {
            menuOpened: "homepage",
            signedIn: false
        }
    }

    dispMenu = (val) => {
        this.setState({menuOpened: val});
    }

    changeAccess = (val) => {
      this.setState({
        signedIn: val
      })
    }

    loadUser = (data) => {
      this.setState({
        menuOpened: 'homepage'
      })
    }

    render() {
        return (
            <div className="App">
                <MetaTags>
                    <title> MotorMarche </title>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link href='https://fonts.googleapis.com/css?family=Damion' rel='stylesheet' />
                </MetaTags>
                {   this.state.menuOpened === 'homepage'
                    ? <HomePage dispMenu={this.dispMenu} />
                    :<Home dispMenu={this.dispMenu} signedIn={this.state.signedIn} changeAccess={this.changeAccess}/>
                }
                {
                    this.state.menuOpened === 'home'
                    ? <HomePage />
                    : this.state.menuOpened === 'progress'
                    ? <Progress />
                    : this.state.menuOpened === 'store'
                    ? <ShopCard />
                    : this.state.menuOpened === 'signinform'
                    ? <Signin loadUser={this.loadUser} dispMenu={this.dispMenu} changeAccess={this.changeAccess}/>
                    : this.state.menuOpened === 'signupform'
                    ? <Signup loadUser={this.loadUser} dispMenu={this.dispMenu} changeAccess={this.changeAccess}/>
                    : this.state.menuOpened === 'services'
                    ? <Services />
                    : <div></div>
                }
                {
                    this.state.menuOpened === 'homepage'
                    ? <div></div>
                    : <Footer />
                }
            </div>
        )
    }
}

export default App;
