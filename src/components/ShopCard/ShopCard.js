import React from 'react';
import './ShopCard.css';

const ShopCard = () => {
  return (
    <div id="shopCard">
      <article id="shopCardList" className="cf artPad">
        <a href="https://www.google.com" className="no-underline">
        <div id="shopTitle" className="mv3" >
          <span className="link2" >Click Here To Shop</span>
        </div>
      </a>
        <div className="fl w50 w100">
        <a href="https://www.google.com" className="fl pad20 w50 grow parent_">
          <span className="db aspect-ratio aspect-ratio--1x1">
            <span role="img" style={{backgroundImage: "url("+require('./images/bag1.jpeg')+")"}} className="bg-center cover aspect-ratio--object shadowed">
              <div className="child_" ><strong>Men</strong></div>
            </span>
          </span>
        </a>
        <a href="https://www.google.com" className="fl pad20 w50 grow parent_">
          <span className="db aspect-ratio aspect-ratio--1x1">
            <span role="img" style={{backgroundImage:"url("+require('./images/clth4.jpg')+")"}} className="bg-center cover aspect-ratio--object shadowed">
              <div className="child_" ><strong>Women</strong></div>
            </span>
          </span>
        </a>
        <a href="https://www.google.com" className="fl pad20 w50 grow parent_">
          <span className="db aspect-ratio aspect-ratio--1x1">
            <span role="img" style={{backgroundImage: "url("+require('./images/glove1.jpg')+")"}} className="bg-center cover aspect-ratio--object shadowed">
              <div className="child_" ><strong>Kids</strong></div>
            </span>
          </span>
        </a>
        <a href="https://www.google.com" className="fl pad20 w50 grow parent_">
          <span className="db aspect-ratio aspect-ratio--1x1">
            <span role="img" style={{backgroundImage:"url("+require('./images/clth3.jpg')+")"}} className="bg-center cover aspect-ratio--object shadowed">
              <div className="child_" ><strong>Bags</strong></div>
            </span>
          </span>
        </a>
        </div>
        <div className="fl w50 w100">
        <a href="https://www.google.com" className="fl pad20 w50 grow parent_">
          <span className="db aspect-ratio aspect-ratio--1x1">
            <span role="img" style={{backgroundImage: "url("+require('./images/bag1.jpeg')+")"}} className="bg-center cover aspect-ratio--object shadowed">
              <div className="child_" ><strong>Kids</strong></div>
            </span>
          </span>
        </a>
        <a href="https://www.google.com" className="fl pad20 w50 grow parent_">
          <span className="db aspect-ratio aspect-ratio--1x1">
            <span role="img" style={{backgroundImage:"url("+require('./images/clth4.jpg')+")"}} className="bg-center cover aspect-ratio--object shadowed">
              <div className="child_" ><strong>Accessories</strong></div>
            </span>
          </span>
        </a>
        <a href="https://www.google.com" className="fl pad20 w50 grow parent_">
          <span className="db aspect-ratio aspect-ratio--1x1">
            <span role="img" style={{backgroundImage: "url("+require('./images/glove1.jpg')+")"}} className="bg-center cover aspect-ratio--object shadowed">
              <div className="child_" ><strong>Fashion</strong></div>
            </span>
          </span>
        </a>
        <a href="https://www.google.com" className="fl pad20 w50 grow parent_">
          <span className="db aspect-ratio aspect-ratio--1x1">
            <span role="img" style={{backgroundImage:"url("+require('./images/clth3.jpg')+")"}} className="bg-center cover aspect-ratio--object shadowed">
              <div className="child_" ><strong>Fashion</strong></div>
            </span>
          </span>
        </a>
        </div>
        <div className="fl w100">
        <a href="https://www.google.com" className="fl pad20 w25 grow parent_">
          <span className="db aspect-ratio aspect-ratio--1x1">
            <span role="img" style={{backgroundImage: "url("+require('./images/bag1.jpeg')+")"}} className="bg-center cover aspect-ratio--object shadowed">
              <div className="child_" ><strong>Men</strong></div>
            </span>
          </span>
        </a>
        <a href="https://www.google.com" className="fl pad20 w25 grow parent_">
          <span className="db aspect-ratio aspect-ratio--1x1">
            <span role="img" style={{backgroundImage:"url("+require('./images/clth4.jpg')+")"}} className="bg-center cover aspect-ratio--object shadowed">
              <div className="child_" ><strong>Women</strong></div>
            </span>
          </span>
        </a>
        <a href="https://www.google.com" className="fl pad20 w25 grow parent_">
          <span className="db aspect-ratio aspect-ratio--1x1">
            <span role="img" style={{backgroundImage: "url("+require('./images/glove1.jpg')+")"}} className="bg-center cover aspect-ratio--object shadowed">
              <div className="child_" ><strong>Kids</strong></div>
            </span>
          </span>
        </a>
        <a href="https://www.google.com" className="fl pad20 w25 grow parent_">
          <span className="db aspect-ratio aspect-ratio--1x1">
            <span role="img" style={{backgroundImage:"url("+require('./images/clth3.jpg')+")"}} className="bg-center cover aspect-ratio--object shadowed">
              <div className="child_" ><strong>Bags</strong></div>
            </span>
          </span>
        </a>
        </div>
      </article>
    </div>
  )
}

export default ShopCard;