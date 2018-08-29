import React from 'react';
import './ShopCard.css';

class ShopCard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showCat: 'cloth',
      dropCat: false
    }
  }

  toggleDropCat = () => {
    this.setState({dropCat: !(this.state.dropCat)})
  }

  render() {
    return (
      <div id="shopCard">
        <article id="shopCardList" className="cf artPad">
          <div className="shopTitle pointer hover-gray"
          onClick={() => this.toggleDropCat()}>Categories&nbsp; <i class="arrow down">^</i></div>
          {this.state.dropCat
            ?<div className="categoryDropdown white">
                <div className="pointer"
                onClick={() => this.setState({showCat: 'cloth'})}>Clothing</div>
                <div className="pointer"
                onClick={() => this.setState({showCat: 'merchandise'})}>Merchandise</div>
            </div>
          :<div></div>
          }
          <div className="fl w30 white storeleft">
            <div className="rightnavitem pointer"
            onClick={() => this.setState({showCat: 'cloth'})}>Clothing</div>
            <div className="rightnavitem pointer"
            onClick={() => this.setState({showCat: 'merchandise'})}>Merchandise</div>
          </div>
          {
            this.state.showCat === 'cloth'
            ? <div className="fr storeright">
            <div className="fl w50 w100">
            <a href="https://www.google.com" className="fl pad20 w50 grow parent_">
              <span className="db aspect-ratio aspect-ratio--1x1">
                <span role="img" style={{backgroundImage: "url("+require('./image/img1.jpg')+")"}} className="bg-center cover aspect-ratio--object shadowed">
                  <div className="child_" ><strong>&#8377; 999</strong></div>
                </span>
              </span>
            </a>
            <a href="https://www.google.com" className="fl pad20 w50 grow parent_">
              <span className="db aspect-ratio aspect-ratio--1x1">
                <span role="img" style={{backgroundImage:"url("+require('./image/img2.jpg')+")"}} className="bg-center cover aspect-ratio--object shadowed">
                  <div className="child_" ><strong>&#8377; 999</strong></div>
                </span>
              </span>
            </a>
            <a href="https://www.google.com" className="fl pad20 w50 grow parent_">
              <span className="db aspect-ratio aspect-ratio--1x1">
                <span role="img" style={{backgroundImage: "url("+require('./image/img3.jpg')+")"}} className="bg-center cover aspect-ratio--object shadowed">
                  <div className="child_" ><strong>Coming Soon</strong></div>
                </span>
              </span>
            </a>
            <a href="https://www.google.com" className="fl pad20 w50 grow parent_">
              <span className="db aspect-ratio aspect-ratio--1x1">
                <span role="img" style={{backgroundImage:"url("+require('./image/img4.jpg')+")"}} className="bg-center cover aspect-ratio--object shadowed">
                  <div className="child_" ><strong>Coming Soon</strong></div>
                </span>
              </span>
            </a>
            </div>
            <div className="fl w50 w100">
            <a href="https://www.google.com" className="fl pad20 w50 grow parent_">
              <span className="db aspect-ratio aspect-ratio--1x1">
                <span role="img" style={{backgroundImage: "url("+require('./image/img5.jpg')+")"}} className="bg-center cover aspect-ratio--object shadowed">
                  <div className="child_" ><strong>Coming Soon</strong></div>
                </span>
              </span>
            </a>
            <a href="https://www.google.com" className="fl pad20 w50 grow parent_">
              <span className="db aspect-ratio aspect-ratio--1x1">
                <span role="img" style={{backgroundImage:"url("+require('./image/img6.jpg')+")"}} className="bg-center cover aspect-ratio--object shadowed">
                  <div className="child_" ><strong>Coming Soon</strong></div>
                </span>
              </span>
            </a>
            <a href="https://www.google.com" className="fl pad20 w50 grow parent_">
              <span className="db aspect-ratio aspect-ratio--1x1">
                <span role="img" style={{backgroundImage: "url("+require('./image/img7.jpg')+")"}} className="bg-center cover aspect-ratio--object shadowed">
                  <div className="child_" ><strong>Coming Soon</strong></div>
                </span>
              </span>
            </a>
            <a href="https://www.google.com" className="fl pad20 w50 grow parent_">
              <span className="db aspect-ratio aspect-ratio--1x1">
                <span role="img" style={{backgroundImage:"url("+require('./image/img8.jpg')+")"}} className="bg-center cover aspect-ratio--object shadowed">
                  <div className="child_" ><strong>Coming Soon</strong></div>
                </span>
              </span>
            </a>
            </div>
            <div className="fl w100">
            <a href="https://www.google.com" className="fl pad20 w25 grow parent_">
              <span className="db aspect-ratio aspect-ratio--1x1">
                <span role="img" style={{backgroundImage: "url("+require('./image/img9.jpg')+")"}} className="bg-center cover aspect-ratio--object shadowed">
                  <div className="child_" ><strong>Coming Soon</strong></div>
                </span>
              </span>
            </a>
            <a href="https://www.google.com" className="fl pad20 w25 grow parent_">
              <span className="db aspect-ratio aspect-ratio--1x1">
                <span role="img" style={{backgroundImage:"url("+require('./image/img10.jpg')+")"}} className="bg-center cover aspect-ratio--object shadowed">
                  <div className="child_" ><strong>Coming Soon</strong></div>
                </span>
              </span>
            </a>
            <a href="https://www.google.com" className="fl pad20 w25 grow parent_">
              <span className="db aspect-ratio aspect-ratio--1x1">
                <span role="img" style={{backgroundImage: "url("+require('./image/img11.jpg')+")"}} className="bg-center cover aspect-ratio--object shadowed">
                  <div className="child_" ><strong>Coming Soon</strong></div>
                </span>
              </span>
            </a>
            <a href="https://www.google.com" className="fl pad20 w25 grow parent_">
              <span className="db aspect-ratio aspect-ratio--1x1">
                <span role="img" style={{backgroundImage:"url("+require('./image/img12.jpg')+")"}} className="bg-center cover aspect-ratio--object shadowed">
                  <div className="child_" ><strong>Coming Soon</strong></div>
                </span>
              </span>
            </a>
            </div>
            </div>
          : <div className="fr storeright">
            <div className="fl w50 w100">
            <a href="https://www.google.com" className="fl pad20 w50 grow parent_">
              <span className="db aspect-ratio aspect-ratio--1x1">
                <span role="img" style={{backgroundImage: "url("+require('./image/img13.jpg')+")"}} className="bg-center cover aspect-ratio--object shadowed">
                  <div className="child_" ><strong>Coming Soon</strong></div>
                </span>
              </span>
            </a>
            <a href="https://www.google.com" className="fl pad20 w50 grow parent_">
              <span className="db aspect-ratio aspect-ratio--1x1">
                <span role="img" style={{backgroundImage:"url("+require('./image/img14.jpg')+")"}} className="bg-center cover aspect-ratio--object shadowed">
                  <div className="child_" ><strong>Coming Soon</strong></div>
                </span>
              </span>
            </a>
            <a href="https://www.google.com" className="fl pad20 w50 grow parent_">
              <span className="db aspect-ratio aspect-ratio--1x1">
                <span role="img" style={{backgroundImage: "url("+require('./image/img15.jpg')+")"}} className="bg-center cover aspect-ratio--object shadowed">
                  <div className="child_" ><strong>Coming Soon</strong></div>
                </span>
              </span>
            </a>
            <a href="https://www.google.com" className="fl pad20 w50 grow parent_">
              <span className="db aspect-ratio aspect-ratio--1x1">
                <span role="img" style={{backgroundImage:"url("+require('./image/img16.jpg')+")"}} className="bg-center cover aspect-ratio--object shadowed">
                  <div className="child_" ><strong>Coming Soon</strong></div>
                </span>
              </span>
            </a>
            </div>
            <div className="fl w50 w100">
            <a href="https://www.google.com" className="fl pad20 w50 grow parent_">
              <span className="db aspect-ratio aspect-ratio--1x1">
                <span role="img" style={{backgroundImage: "url("+require('./image/img17.jpg')+")"}} className="bg-center cover aspect-ratio--object shadowed">
                  <div className="child_" ><strong>Coming Soon</strong></div>
                </span>
              </span>
            </a>
            <a href="https://www.google.com" className="fl pad20 w50 grow parent_">
              <span className="db aspect-ratio aspect-ratio--1x1">
                <span role="img" style={{backgroundImage:"url("+require('./image/img18.jpg')+")"}} className="bg-center cover aspect-ratio--object shadowed">
                  <div className="child_" ><strong>Coming Soon</strong></div>
                </span>
              </span>
            </a>
            <a href="https://www.google.com" className="fl pad20 w50 grow parent_">
              <span className="db aspect-ratio aspect-ratio--1x1">
                <span role="img" style={{backgroundImage: "url("+require('./image/img19.jpg')+")"}} className="bg-center cover aspect-ratio--object shadowed">
                  <div className="child_" ><strong>Coming Soon</strong></div>
                </span>
              </span>
            </a>
            <a href="https://www.google.com" className="fl pad20 w50 grow parent_">
              <span className="db aspect-ratio aspect-ratio--1x1">
                <span role="img" style={{backgroundImage:"url("+require('./image/img20.jpg')+")"}} className="bg-center cover aspect-ratio--object shadowed">
                  <div className="child_" ><strong>Coming Soon</strong></div>
                </span>
              </span>
            </a>
            </div>
            <div className="fl w100">
            <a href="https://www.google.com" className="fl pad20 w25 grow parent_">
              <span className="db aspect-ratio aspect-ratio--1x1">
                <span role="img" style={{backgroundImage: "url("+require('./image/img21.jpg')+")"}} className="bg-center cover aspect-ratio--object shadowed">
                  <div className="child_" ><strong>Coming Soon</strong></div>
                </span>
              </span>
            </a>
            <a href="https://www.google.com" className="fl pad20 w25 grow parent_">
              <span className="db aspect-ratio aspect-ratio--1x1">
                <span role="img" style={{backgroundImage:"url("+require('./image/img22.jpg')+")"}} className="bg-center cover aspect-ratio--object shadowed">
                  <div className="child_" ><strong>Coming Soon</strong></div>
                </span>
              </span>
            </a>
            </div>
            </div>
          }
        </article>
      </div>
    )
  }
}

export default ShopCard;