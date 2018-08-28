import React from 'react';
import './Services.css'

const Services = () => {
  return (
    <div id="shopCard">
      <article id="shopCardList" className="cf artPad">
        <div className="shopTitle">Categories</div> 
        <div className="fl w30 white storeleft">
          <div className="rightnavitem pointer">The Garage</div>
          <div className="rightnavitem pointer">Fuel</div>
          <div className="rightnavitem pointer">Accessories</div>
          <div className="rightnavitem pointer">Leather</div>
          <div className="rightnavitem pointer">Car Parts</div>
        </div>
        <div className="fr storeright">
        <div className="fl w50 w100">
        <a href="https://www.google.com" className="fl pad20 w50 grow parent_">
          <span className="db aspect-ratio aspect-ratio--1x1">
            <span role="img" style={{backgroundImage: "url("+require('./images/serv5.jpg')+")"}} className="bg-center cover aspect-ratio--object shadowed">
              <div className="child_" ><strong>Men</strong></div>
            </span>
          </span>
        </a>
        <a href="https://www.google.com" className="fl pad20 w50 grow parent_">
          <span className="db aspect-ratio aspect-ratio--1x1">
            <span role="img" style={{backgroundImage:"url("+require('./images/serv6.jpg')+")"}} className="bg-center cover aspect-ratio--object shadowed">
              <div className="child_" ><strong>Women</strong></div>
            </span>
          </span>
        </a>
        <a href="https://www.google.com" className="fl pad20 w50 grow parent_">
          <span className="db aspect-ratio aspect-ratio--1x1">
            <span role="img" style={{backgroundImage: "url("+require('./images/serv7.jpg')+")"}} className="bg-center cover aspect-ratio--object shadowed">
              <div className="child_" ><strong>Kids</strong></div>
            </span>
          </span>
        </a>
        <a href="https://www.google.com" className="fl pad20 w50 grow parent_">
          <span className="db aspect-ratio aspect-ratio--1x1">
            <span role="img" style={{backgroundImage:"url("+require('./images/banner.png')+")"}} className="bg-center cover aspect-ratio--object shadowed">
              <div className="child_" ><strong>Bags</strong></div>
            </span>
          </span>
        </a>
        </div>
        <div className="fl w50 w100">
        <a href="https://www.google.com" className="fl pad20 w50 grow parent_">
          <span className="db aspect-ratio aspect-ratio--1x1">
            <span role="img" style={{backgroundImage: "url("+require('./images/serv1.jpg')+")"}} className="bg-center cover aspect-ratio--object shadowed">
              <div className="child_" ><strong>Kids</strong></div>
            </span>
          </span>
        </a>
        <a href="https://www.google.com" className="fl pad20 w50 grow parent_">
          <span className="db aspect-ratio aspect-ratio--1x1">
            <span role="img" style={{backgroundImage:"url("+require('./images/banner4.jpg')+")"}} className="bg-center cover aspect-ratio--object shadowed">
              <div className="child_" ><strong>Accessories</strong></div>
            </span>
          </span>
        </a>
        <a href="https://www.google.com" className="fl pad20 w50 grow parent_">
          <span className="db aspect-ratio aspect-ratio--1x1">
            <span role="img" style={{backgroundImage: "url("+require('./images/serv5.jpg')+")"}} className="bg-center cover aspect-ratio--object shadowed">
              <div className="child_" ><strong>Fashion</strong></div>
            </span>
          </span>
        </a>
        <a href="https://www.google.com" className="fl pad20 w50 grow parent_">
          <span className="db aspect-ratio aspect-ratio--1x1">
            <span role="img" style={{backgroundImage:"url("+require('./images/serv7.jpg')+")"}} className="bg-center cover aspect-ratio--object shadowed">
              <div className="child_" ><strong>Fashion</strong></div>
            </span>
          </span>
        </a>
        </div>
        <div className="fl w100">
        <a href="https://www.google.com" className="fl pad20 w25 grow parent_">
          <span className="db aspect-ratio aspect-ratio--1x1">
            <span role="img" style={{backgroundImage: "url("+require('./images/serv1.jpg')+")"}} className="bg-center cover aspect-ratio--object shadowed">
              <div className="child_" ><strong>Men</strong></div>
            </span>
          </span>
        </a>
        <a href="https://www.google.com" className="fl pad20 w25 grow parent_">
          <span className="db aspect-ratio aspect-ratio--1x1">
            <span role="img" style={{backgroundImage:"url("+require('./images/banner.png')+")"}} className="bg-center cover aspect-ratio--object shadowed">
              <div className="child_" ><strong>Women</strong></div>
            </span>
          </span>
        </a>
        <a href="https://www.google.com" className="fl pad20 w25 grow parent_">
          <span className="db aspect-ratio aspect-ratio--1x1">
            <span role="img" style={{backgroundImage: "url("+require('./images/banner4.jpg')+")"}} className="bg-center cover aspect-ratio--object shadowed">
              <div className="child_" ><strong>Kids</strong></div>
            </span>
          </span>
        </a>
        <a href="https://www.google.com" className="fl pad20 w25 grow parent_">
          <span className="db aspect-ratio aspect-ratio--1x1">
            <span role="img" style={{backgroundImage:"url("+require('./images/serv7.jpg')+")"}} className="bg-center cover aspect-ratio--object shadowed">
              <div className="child_" ><strong>Bags</strong></div>
            </span>
          </span>
        </a>
        </div>
        </div>
      </article>
    </div>

  )
}

export default Services;