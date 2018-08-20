import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <div>
      <div className="w-10 white spacer pa2">
          Top Picks
      </div>
      <footer className="w-100 tc-l bg-center cover mt0">
        <div className="footerHeadBlock">
          <div className="footerHead">MotorMarch&eacute;</div>
          <em className="gray footerHeadTag"> the automotive marketplace </em>
        </div>
        <div className="footerFootBlock">
          <div className="pt3 pt5-ns ph3 dtc-ns w-25-ns footerFootDiv">
            <div className="pv1"><a href="/">Privacy Policy</a></div>
            <div className="pv1"><a href="/">Terms And Conditions</a></div>
            <div className="pv1"><a href="/">About</a></div>
          </div>
          <div className="pt3 pt5-ns ph5 dtc-ns w-25-ns footerFootDiv">
            <span className="pv1">
              <a href="https://google.com" className=" " >
                <FontAwesomeIcon icon={['fab', 'google-plus-g']} color="#555" size="2x" className="footer_icon" />
              </a>
            </span>
            <span className="pv1 ph2 ph4-l">
              <a href="https://google.com" className=" " >
                <FontAwesomeIcon icon={['fab', 'facebook']} color="#555" size="2x" className="footer_icon" />
              </a>
            </span>
            <span className="pv1 pr2 pr4-l">
              <a href="https://google.com" className=" " >
                <FontAwesomeIcon icon={['fab', 'instagram']} color="#555" size="2x" className="footer_icon" />
              </a>
            </span>
            <span className="pv1">
              <a href="https://google.com" className=" " >
                <FontAwesomeIcon icon={['fab', 'twitter']} color="#555" size="2x" className="footer_icon" />
              </a>
            </span>
          </div>
          <div className="pt3 pt5-ns ph3 dtc-ns w-25-ns footerFootDiv">
            <div className="pv1"><a href="/">Shipping Info</a></div>
            <div className="pv1"><a href="/">Returns / Exchanges</a></div>
            <div className="pv1"><a href="/">Contact</a></div>
          </div>
        </div>
        <div class="f6 pt5 pb2 footerLastLine">© 2018 <b class="ttu">| MOTORMARCH&Eacute; PVT. LTD. |</b> All Rights Reserved</div>
      </footer>
    </div>
  )
}

export default Footer;