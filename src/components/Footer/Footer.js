import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
      <footer className="w-100 tc-l bg-center cover bg-black pt4 pb3 ph5 mt0">
        <section className="cf mb2">
          <div className="mb4 mb0-ns w-50 fr dn db-ns">
            <a className="white f5 fw6 tl link dib pv4 mt2 mb4 mb0-l submit_button link_" href="mailto:motormarche@gmail.com" >
              motormarche.com
            </a>
          </div>
          <div className="mb0-ns fl w-100-s w-50-ns" >
            <p className="white f4 fw6 mb2 f6 mt0 mb3">
              Sign up for our newsletter.
            </p>
            <input placeholder="Email Address" className="mw-100 w-100 w5-ns f5 input-reset ba b--black-20 pv2 ph4 border-box" />
            <input class="b system-sans-serif white-80 ph4 pv2 mt4 input-reset ba b--white bg-black pointer f5 dib submit_type" type="submit" value="Submit" />
          </div>
        </section>
        <div className="dt dt--fixed w-100" >
          <div className="dn dtc-ns v-mid">
            <p className="f7 white dib pr3 mb3">
              Copyright © Motormarche 2018
            </p>
          </div>
        </div>
        <div className="db dn-ns">
          <p className="f7 white-70 mt4 tc">
            Copyright © Motormarche
          </p>
        </div>
        <a href="https://google.com" className="footer_icon " >
          <FontAwesomeIcon icon={['fab', 'google']} color="#888888" size="1x" className="footer_icon" />
        </a>
        <a href="https://fb.com" className="footer_icon " >
          <FontAwesomeIcon icon={['fab', 'facebook']} color="#888888" size="1x" className="footer_icon" />
        </a>
        <a href="https://instagram.com" className="footer_icon ">
          <FontAwesomeIcon icon={['fab', 'instagram']} color="#888888" size="1x" className="footer_icon" />
        </a>
      </footer>
  )
}

export default Footer;