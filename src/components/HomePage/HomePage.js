import React from 'react';
import './HomePage.css';

const HomePage = ({dispMenu}) => {
  return (
    <div className="coverHomePage ">
      <div className="headHomePage" >
        MotorMarch&eacute;
        <div className="homePageTagline">
          <em>the automotive marketplace</em>
        </div>
      </div>
      <div className="animatedText-1">
        <div 
        className="homePageCat">
          <a 
          onClick={() => dispMenu('store')}
          className="homePageCatLink" href="#">Products</a>
        </div>
        <div 
        className="homePageCat">
          <a 
          onClick={() => dispMenu('services')}
          className="homePageCatLink" href="#">Services</a>
        </div>
        <div 
        className="homePageCat">
          <a 
          onClick={() => dispMenu('signinform')}
          className="homePageCatLink" href="#">Login</a>
        </div>
        <div className="homePageCat">
          <a 
          onClick={() => dispMenu('signupform')}
          className="homePageCatLink" href="#">Register</a>
        </div>
      </div>
      <div className=" homePageCard white animatedText-2" >
      Make a bold fashion statement with our elegant range of products
      </div>
      <div className=" homePageCard white animatedText-3" >
      Get highly personalized services and styles thought out to perfection
      </div>
      <div className=" homePageCard white animatedText-4" >
      Easy to order. Product arrived quickly, in perfect condition, exactly as described, and beautifully packed.
      <div className="reviewer"> - Mrs XXX YYY</div>
      </div>
      <div className=" homePageCard white animatedText-5" >
      Very friendly service, great textiles, direct shipping
      <div className="reviewer">- Mr. XXXX YYY </div>
      </div>
      <div className=" homePageCard white animatedText-6" >
      Excellent and prompt service. I bought a number of items. Two are excellent. Two are satisfactory.
      <div className="reviewer"> - Mr.XXXX YYYY </div> 
      </div>
    </div>
    )
}

export default HomePage;