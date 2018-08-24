import React, { Component } from 'react';
import './App.css';
import MetaTags from 'react-meta-tags';
import Home from './components/Home/Home';
import Progress from './components/Progress/Progress';
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';
import Thehome from './components/Thehome/Thehome';
import ShopCard from './components/ShopCard/ShopCard';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faBars, faCartArrowDown, faCog } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faBars, faCartArrowDown, faCog);

class App extends Component {

    constructor(){
        super();
        this.state = {
            menuOpened: "home",
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
        menuOpened: 'home'
      })
    }

    render() {
        return (
            <div className="App">
                <MetaTags>
                    <title> MotorMarche </title>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                </MetaTags>
                <Home dispMenu={this.dispMenu} signedIn={this.state.signedIn} changeAccess={this.changeAccess}/>
                {
                    this.state.menuOpened === 'home'
                    ? <Thehome />
                    : this.state.menuOpened === 'progress'
                    ? <Progress />
                    : this.state.menuOpened === 'store'
                    ? <ShopCard />
                    : this.state.menuOpened === 'signinform'
                    ? <Signin loadUser={this.loadUser} dispMenu={this.dispMenu} changeAccess={this.changeAccess}/>
                    : this.state.menuOpened === 'signupform'
                    ? <Signup loadUser={this.loadUser} dispMenu={this.dispMenu} changeAccess={this.changeAccess}/>
                    : <Services />
                }
                <Footer />
            </div>
        )
    }
}

export default App;
