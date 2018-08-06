import React, { Component } from 'react';
import './App.css';
import MetaTags from 'react-meta-tags';
import Home from './components/Home/Home';
import Thehome from './components/Thehome/Thehome';
import ShopCard from './components/ShopCard/ShopCard';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';


library.add(faArrowLeft, faArrowRight);

class App extends Component {

    constructor(){
        super();
        this.state = {
            menuOpened: "home",
        }
    }

    dispMenu = (val) => {
        this.setState({menuOpened: val});
    }


    render() {
        return (
            <div className="App">
                <MetaTags>
                    <title> MotorMarche </title>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                </MetaTags>
                <Home dispMenu={this.dispMenu} />
                {
                    this.state.menuOpened === 'home'
                    ? <Thehome />
                    : this.state.menuOpened === 'store'
                    ? <ShopCard />
                    : <Services />
                }
                <Footer />
            </div>
        )
    }
}

export default App;
